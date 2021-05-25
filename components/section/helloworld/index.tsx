import styled from "styled-components";
import { profile } from "@/data";

const SuperTitle = styled.h1`
  font-size: 3em;
`;

const SubTitle = styled.h3`
  font-size: 1.1em;
`;

const TitleBox = styled.div``;

const SectionBox = styled.div`
  margin-top: 3em;
  margin-left: 2em;
`;

function HelloworldSection() {
  return (
    <SectionBox>
      <TitleBox>
        <SuperTitle>{profile.name}</SuperTitle>
        <SubTitle>{profile.realName}</SubTitle>
      </TitleBox>
    </SectionBox>
  );
}

export { HelloworldSection };
