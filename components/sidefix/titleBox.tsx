import { profile } from "@/data";
import { color } from "@/styles";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  width: fit-content;

  text-align: right;
  color: ${color.darkShade};
`;

const SuperTitle = styled.h1`
  font-size: 8rem;
`;

const SubTitle = styled.h3`
  font-size: 2rem;
  margin-right: 0.6em;

  :not(:last-child) {
    margin-bottom: 0.15em;
  }
`;

const TitleGroup = styled.div`
  margin-right: 1rem;
  padding: 1rem 1.3rem 1.3rem 1.3rem;
`;

const Vline = styled.span`
  width: 0.7rem;
  background-color: ${color.darkShade};
`;

export function NameTitle() {
  return (
    <Box>
      <TitleGroup>
        <SuperTitle>{profile.name}</SuperTitle>
        <SubTitle>{profile.realNameEn}</SubTitle>
        <SubTitle>{profile.realName}</SubTitle>
      </TitleGroup>
      <Vline />
    </Box>
  );
}
