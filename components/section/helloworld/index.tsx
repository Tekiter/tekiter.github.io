import styled from "styled-components";
import { TitleBox } from "./titleBox";
import { LoveThings } from "./loveThings";

const SectionBox = styled.div`
  height: 100vh;
  padding: 10vh 5em 5vh 5em;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LinkBox = styled.div``;

function HelloworldSection() {
  return (
    <SectionBox>
      <div>
        <TitleBox />
      </div>
      <LinkBox>
        <LoveThings />
      </LinkBox>
    </SectionBox>
  );
}

export { HelloworldSection };
