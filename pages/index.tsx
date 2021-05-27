import Head from "next/head";

import { HelloworldSection } from "@/components/section/helloworld";
import styled from "styled-components";
import { IntroduceSection } from "@/components/section/introduce";
import { Spacer } from "@/components/utils";

const SplitBox = styled.div`
  display: flex;
  flex-direction: row-reverse;

  & > :last-child {
    flex-grow: 1;
  }
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
          <div>
            <Spacer size="80vh" />
            <IntroduceSection />
          </div>
        </SplitBox>
      </main>
    </div>
  );
}
