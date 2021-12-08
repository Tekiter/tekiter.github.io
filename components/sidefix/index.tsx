import styled from "styled-components";
import { NameTitle } from "./titleBox";
import { LoveThings } from "./loveThings";
import { Links } from "./links";
import { Spacer } from "@/components/common/utils";

const SectionBox = styled.div`
  height: 100vh;
  padding: 10vh 5em 5vh 5em;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  text-align: right;

  & .mt-3 {
    margin-top: 3em;
  }
`;

const TitleBox = styled.div`
  text-align: right;
`;

function HelloworldSection() {
  return (
    <SectionBox>
      <TitleBox>
        <div>
          <NameTitle />
        </div>
      </TitleBox>
      <div>
        <LoveThings />
        <Spacer size="4em" />
        <Links />
      </div>
    </SectionBox>
  );
}

export { HelloworldSection };
