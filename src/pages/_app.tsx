import type { AppProps } from "next/app";
import Head from "next/head";
import "styles/global/_index.scss";

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>LinkedIn Clone</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
