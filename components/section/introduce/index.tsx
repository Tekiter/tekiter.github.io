import { Title } from "@/components/Title";
import { profile } from "@/data";
import { color } from "@/styles";
import { format } from "date-fns";
import styled from "styled-components";

const IntroBox = styled.div`
  margin: 0 3em;
  color: ${color.darkShade};
`;

export function IntroduceSection() {
  return (
    <IntroBox>
      <Title>Tekiter</Title>
      <p>
        {profile.univName} {profile.univMajor} {profile.univDegree}
      </p>
      <p>{format(profile.univEnter, "yyyy/MM/dd")} ~</p>
    </IntroBox>
  );
}
