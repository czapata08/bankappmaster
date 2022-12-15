import { useState, useContext } from "react";
import { removeCookies } from "cookies-next";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { useAuth } from "../context/user.context";
import { authenticatedUser } from "../pages/signin";

function Layout(props) {
  const [isOpen, setIsOpen] = useState(false);
  // const [expand, setExpand] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const title = "banking app";
  const router = useRouter();
  const { user, signoutHandler } = useAuth();

  //TODO
  ///IMPORT CONTEXT AND ADD USER VARIABLE TO MANIPULATE CONDITIONAL CODE TO RNDER NAVITEMS

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
        />
      </Head>
      <header>
        <Navbar className='navbar-expand-lg'>
          <NavbarBrand href='/'>Knights Bank</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse
            isOpen={isOpen}
            navbar>
            <Nav
              className='me-auto'
              navbar>
              <NavItem>
                <NavLink href='/signin'>Signin</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/signup'>Create</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/support'>Support</NavLink>
              </NavItem>
            </Nav>
            <NavItem>
              {user && (
                <button
                  onClick={() => {
                    signoutHandler();
                  }}>
                  Logout
                </button>
              )}
            </NavItem>
            {user ? <h5>{user.email}</h5> : <h1>not working</h1>}
            {console.log(`user from layout ${JSON.stringify(user)}`)}
          </Collapse>
        </Navbar>
      </header>
      <Container>{props.children}</Container>
    </div>
  );
}

export default Layout;
