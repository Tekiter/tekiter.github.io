import Head from "next/head";

import { HelloworldSection } from "@/components/section/helloworld";
import styled from "styled-components";
import { IntroduceSection } from "@/components/section/introduce";
import { Spacer } from "@/components/utils";
import { ProjectSection } from "@/components/section/project";

const SplitBox = styled.div`
  display: flex;
  flex-direction: row-reverse;

  & > :last-child {
    flex-grow: 1;
  }
`;

const FixedSection = styled.div`
  position: fixed;
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
          <FixedSection>
            <HelloworldSection />
          </FixedSection>
          <div>
            <Spacer size="80vh" />
            <IntroduceSection />
            <ProjectSection />
          </div>
        </SplitBox>
      </main>
    </div>
  );
}
