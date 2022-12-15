import { createContext, useContext, useState, useEffect } from "react";
// import getUser from "../lib/getUser";
import dbConnect from "../services/dbConnect";
import api from "../lib/api";
import { getCookie, setCookie, removeCookies } from "cookies-next";
import User from "../models";
import jwt from "jsonwebtoken";
import axios from "axios";
import { useRouter } from "next/router";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = getCookie("token");
      if (token) console.log(`found token, lets see if it is is`);
      try {
        const data = jwt.verify(token, process.env.TOKEN_SECRET);
        console.log(`data from useffect ${data}`);
        let user = await User.findById(data.userId);
        user = JSON.parse(JSON.stringify(user));
        console.log(`get user from useffect ${user}`);
        if (user) setUser(user);
      } catch (error) {
        console.log(error);
        return null;
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const signinHandler = (email, password) => {
    if (typeof window === "undefined") {
      return;
    }

    return new Promise((resolve, reject) => {
      axios
        .post(`${API_URL}/api/signin`, {
          email,
          password,
        })
        .then((res) => {
          const validatedUser = res.data;
          setUser(validatedUser);
          console.log(`validated user context = ${JSON.stringify(res.data)}`);
          console.log(`user ${JSON.stringify(user)}`);
          resolve(res);
          router.push("/userdash");
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const signupHandler = (email, password, name) => {
    if (typeof window === "undefined") {
      return;
    }

    return new Promise((resolve, reject) => {
      axios
        .post(`${API_URL}/api/signup`, {
          email,
          password,
          name,
        })
        .then((res) => {
          const newUser = res.data;
          setUser(newUser);
          console.log(`new user context = ${JSON.stringify(res.data)}`);
          console.log(`user ${JSON.stringify(user)}`);
          resolve(res);
          router.push("/userdash");
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const signoutHandler = () => {
    removeCookies("token");
    setUser(null);
    router.push("/signin");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        signinHandler,
        signupHandler,
        signoutHandler,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
