import { removeCookies } from "cookies-next";
import getUser from "../lib/getUser";
import { useRouter } from "next/router";
import dbConnect from "../services/dbConnect";
import Landing from "./landing";
import UserDash from "./userdash";

export default function HomePage(props) {
  const router = useRouter();
  return (
    <>
      <UserDash />
      {/* <p>
        <strong>Name</strong>: {props.user.name}
      </p>
      <p>
        <strong>Email</strong>: {props.user.email}
      </p> */}
    </>
  );
}
export async function getServerSideProps({ req, res }) {
  await dbConnect();
  const user = await getUser(req, res);
  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: "/signin",
      },
      props: {},
    };
  }
  return {
    props: {
      user,
    },
  };
}
