import Head from "next/head";

import { HelloworldSection } from "@/components/sidefix";
import styled from "styled-components";
import { Content } from "@/components/content";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tekiter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContentSlot>
        <Content />
      </ContentSlot>

      <SideSlot>
        <HelloworldSection />
      </SideSlot>
    </div>
  );
}

const SideSlot = styled.div`
  & > * {
    position: fixed;
    top: 0;
    right: 0;
  }
`;

const ContentSlot = styled.div`
  padding-top: 70vh;

  width: 50vw;
  padding-left: 2rem;
`;
