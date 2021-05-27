import Head from "next/head";

import { HelloworldSection } from "@/components/section/helloworld";
import styled from "styled-components";

const SplitBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tekiter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SplitBox>
          <HelloworldSection />
        </SplitBox>
      </main>
    </div>
  );
}
