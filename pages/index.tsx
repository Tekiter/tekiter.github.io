import Head from "next/head";

import { HelloworldSection } from "@/components/section/helloworld";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tekiter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HelloworldSection />
      </main>
    </div>
  );
}
