import { profile } from "@/data";
import { color } from "@/styles";
import { differenceInDays } from "date-fns";
import format from "date-fns/format";
import { lighten } from "polished";
import styled from "styled-components";

function MilProgressBase(props: { className?: string; percent: number }) {
  return (
    <div className={props.className}>
      <span className="progress-inner"></span>
    </div>
  );
}

const MilProgress = styled(MilProgressBase)`
  box-sizing: content-box;
  background-color: ${lighten(0.3, color.lightAccent)};
  height: 0.4rem;
  overflow: hidden;

  span {
    display: block;
    overflow: hidden;
    height: 100%;
    background-color: ${color.lightAccent};

    width: ${(p) => p.percent}%;
  }
`;

const MilitaryCardBox = styled.div`
  margin-top: 0.7em;
  max-width: 30vw;

  & div:first-child {
    display: flex;
    justify-content: space-between;
  }

  & div:last-child {
    margin-top: 0.1em;
    font-size: 0.85em;
  }
`;

export function MilitaryCard() {
  const totalDays = differenceInDays(
    profile.military.end,
    profile.military.start
  );
  const currentDays = differenceInDays(new Date(), profile.military.start);
  const percent = Math.floor(((100 * currentDays) / totalDays) * 10) / 10;
  return (
    <MilitaryCardBox>
      <div>
        <p>{profile.military.name}</p>
        <span>{percent}% 완료</span>
      </div>
      <MilProgress percent={percent} />
      <div>
        {format(profile.military.start, "yyyy/MM/dd")} ~{" "}
        {format(profile.military.end, "yyyy/MM/dd")}
      </div>
    </MilitaryCardBox>
  );
}
