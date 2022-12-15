import { useState } from "react";
// import axios from "axios";
import { useRouter } from "next/router";
import getUser from "../lib/getUser";
import dbConnect from "../services/dbConnect";
import { useAuth } from "../context/user.context";

// tell layout that we logged in

function SigninPage(props) {
  // const [data, updateData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signinHandler } = useAuth();

  //handler functions will live in ctx auth
  // const signinHandler = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await axios.post("/api/signin", {
  //       email,
  //       password,
  //     });
  //     alert(`sucess`);
  //     router.push("/userdash");
  //   } catch (error) {
  //     console.log(error);
  //     alert(`error`);
  //   }
  // };
  // function onChange(event) {
  //   updateData({ ...data, [event.target.name]: event.target.value });
  // }

  const submit = async (e) => {
    e.preventDefault(e);
    setLoading(true);
    signinHandler(email, password)
      .then((res) => {
        setLoading(false);
        console.log(`user from signing page ${JSON.stringify(res.data)}`);
        alert("sucess");
      })
      .catch((error) => {
        setLoading(false);
        alert(error);
      });
  };

  return (
    <div>
      <h1>SignIn</h1>

      <p>Only unauthenticated users can access this page.</p>

      <form onSubmit={submit}>
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
        <button>{loading ? "Loading... " : "Submit"}</button>
      </form>
    </div>
  );
}

export default SigninPage;
// Only render this page if getUser function returns valid user
// export async function getServerSideProps({ req, res }) {
//   await dbConnect();

//   const user = await getUser(req, res);
//   if (user) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/",
//       },
//       props: {},
//     };
//   }
//   return {
//     props: {},
//   };
// }
