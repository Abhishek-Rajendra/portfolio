import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "@components/Navigation";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Abhishek Rajendra Prasad</title>
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
