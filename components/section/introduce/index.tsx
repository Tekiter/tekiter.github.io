import { Title } from "@/components/Title";
import { profile } from "@/data";
import { color } from "@/styles";
import styled from "styled-components";
import { MilitaryCard } from "./military";
import { UnivCard } from "./univ";

const IntroBox = styled.div`
  margin: 0 3rem;
  color: ${color.darkShade};
`;

export function IntroduceSection() {
  return (
    <IntroBox>
      <Title>Tekiter</Title>
      <div>
        <UnivCard />
        {/* <MilitaryCard></MilitaryCard> */}
      </div>
    </IntroBox>
  );
}
