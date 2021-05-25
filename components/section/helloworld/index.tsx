import styled from "styled-components";
import { profile } from "@/data";

const SectionBox = styled.div`
  margin-left: auto;
  width: fit-content;
  padding-top: 10%;
  padding-right: 5em;
  height: 100vh;

  background-color: var(--primary);
`;

const TitleBox = styled.div``;

const SuperTitle = styled.h1`
  font-size: 8rem;
`;

const SubTitle = styled.h3`
  font-size: 1.05rem;
`;

function HelloworldSection() {
  return (
    <SectionBox>
      <TitleBox>
        <SuperTitle>{profile.name}</SuperTitle>
        <SubTitle>{profile.realNameEn}</SubTitle>
        <SubTitle>{profile.realName}</SubTitle>
      </TitleBox>
    </SectionBox>
  );
}

export { HelloworldSection };
