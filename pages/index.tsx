import Head from "next/head";

import { HelloworldSection } from "@/components/sidefix";
import styled from "styled-components";
import { Spacer } from "@/components/common/utils";
import { Content } from "@/components/content";

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

      <SplitBox>
        <FixedSection>
          <HelloworldSection />
        </FixedSection>
        <div>
          <Spacer size="80vh" />
          <Content />
        </div>
      </SplitBox>
    </div>
  );
}
