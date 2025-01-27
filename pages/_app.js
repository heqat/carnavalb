import "bootstrap/dist/css/bootstrap.css";

import "../styles/global.css";
import "../styles/navbar.css";
import "../styles/footer.css";
import "../styles/index.css";
import "../styles/card.css";
import "../styles/homenageado.css"
import "../styles/historia.css";
import "../styles/baile-municipal.css";
import "../styles/servicos.css"
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
