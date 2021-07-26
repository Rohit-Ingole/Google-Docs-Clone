import "tailwindcss/tailwind.css";
import "../styles.css";
import { Provider } from "next-auth/client";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Head>
        <title>Google Docs Clone</title>
        <link
          rel="icon"
          href="https://image.flaticon.com/icons/png/512/270/270006.png"
        />
      </Head>
      <Component {...pageProps}/>
    </Provider>
  );
}

export default MyApp;
