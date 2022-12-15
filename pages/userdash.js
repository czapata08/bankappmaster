import { Container, Row, Col, Nav, NavLink, NavItem } from "reactstrap";
import Example from "../components/userAcc";
import Rewards from "../components/rewards";
import ContactOnDash from "../components/contact";
import dbConnect from "../services/dbConnect";
import getUser from "../lib/getUser";
import { useRouter } from "next/router";

function UserDashNav(props) {
  const router = useRouter();

  return (
    <Nav tabs>
      <NavItem>
        <NavLink
          active
          href='#'>
          Accounts
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Transfers</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Deposit</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Help & LiveChat</NavLink>
      </NavItem>
    </Nav>
  );
}

export default function UserDash() {
  return (
    <Container className='py-3'>
      <UserDashNav />
      <Row>
        <Col
          className='bg-light border'
          xs='6'
          md='8'>
          <Example />
        </Col>
        <Col
          className='br-dark border'
          xs='6'
          md='4'>
          <Rewards />
          <ContactOnDash />
        </Col>
      </Row>
    </Container>
  );
}

// if not user in cookies re-direct to landing page
// export async function getServerSideProps({ req, res }) {
//   await dbConnect();

//   const user = await getUser(req, res);
//   console.log(`hello from userdash${JSON.stringify(user)}`);
//   if (!user) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/signin",
//       },
//       props: {},
//     };
//   }
//   return {
//     props: {
//       user,
//     },
//   };
// }
