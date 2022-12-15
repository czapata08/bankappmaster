import { AuthProvider } from "../context/user.context";
// import { AuthProvider } from "../context/auth";
import Layout from "../components/layout";

import { config } from "@fortawesome/fontawesome-svg-core";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </>
  );
}

export default MyApp;
