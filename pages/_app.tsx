import type { AppProps } from "next/app";
import "@/styles/globals.scss";

import { initGSAP } from "@/utils/init";

initGSAP();

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
