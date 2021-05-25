import type { AppProps } from "next/app";

import { initGSAP } from "@/utils/init";
import { GlobalStyle } from "@/styles/global";

initGSAP();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
