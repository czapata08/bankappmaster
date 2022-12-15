import Layout from "../components/Layout";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import getUser from "../lib/getUser";
import dbConnect from "../services/dbConnect";
import { useAuth } from "../context/user.context";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signupHandler } = useAuth();
  const router = useRouter();

  //send http req to signup api along with name, email, password
  // const signupHandler = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await axios.post("/api/signup", {
  //       name,
  //       email,
  //       password,
  //       //store date here so we can see when the user activity e.g. login
  //     });
  //     console.log(`sucess customer has logged in`);

  //     //send to user dashboard view
  //     router.push("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const submit = async (e) => {
    e.preventDefault(e);
    setLoading(true);
    signupHandler(email, password)
      .then((res) => {
        setLoading(false);
        console.log(`user from signup ${JSON.stringify(res.data)}`);
        alert("sucess");
      })
      .catch((error) => {
        setLoading(false);
        alert(error);
      });
  };

  return (
    <>
      <h1>SignUp</h1>

      <p>Only unauthenticated users can access this page.</p>

      <form onSubmit={submit}>
        <input
          type='text'
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type='email'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>SignUp</button>
      </form>
    </>
  );
}
//Only render this page if getUser function returns valid user
// export async function getServerSideProps({ req, res }) {
//   await dbConnect();

//   const user = await getUser(req, res);
//   if (user) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/userdash",
//       },
//       props: {},
//     };
//   }
//   return {
//     props: {},
//   };
// }
