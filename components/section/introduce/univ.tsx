import { profile } from "@/data";
import format from "date-fns/format";
import styled from "styled-components";

const Small = styled.p`
  font-size: 0.85em;
`;

export function UnivCard() {
  return (
    <div>
      <p>
        {profile.univName} {profile.univMajor} {profile.univDegree}
      </p>
      <Small>{format(profile.univEnter, "yyyy/MM/dd")} ~</Small>
    </div>
  );
}
