import { useEffect, useRef, useState } from "react";
import { loveThing, loveThingList } from "@/data/loveThings";
import gsap from "gsap";
import styled from "styled-components";
import { color } from "@/styles";

function randint(a: number, b: number) {
  return Math.floor(Math.random() * (b - a + 1) + a);
}

function pickOne<T>(arr: T[]): T {
  return arr[randint(0, arr.length - 1)];
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
    </svg>
  );
}

const ThingsBox = styled.div`
  font-size: 2rem;
  text-align: right;

  color: ${color.darkShade};

  & svg {
    height: 1.5rem;
    margin: 0 0.5rem 0 0.5rem;

    fill: ${color.darkAccent};
  }
`;

export const LoveThings = () => {
  const boxRef = useRef(null);
  const textRef = useRef(null);

  const [curLove, setCurLove] = useState<loveThing>({ name: "" });
  const curLoveRef = useRef<loveThing>(curLove);
  curLoveRef.current = curLove;

  const timerRef = useRef(null);

  const [loopStart, setLoopStart] = useState(false);

  useEffect(() => {
    if (loopStart) {
      loop();
    }

    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, [loopStart]);

  function loop() {
    let pick: loveThing;
    while ((pick = pickOne(loveThingList)).name == curLoveRef.current.name);
    setCurLove(pick);

    timerRef.current = setTimeout(loop, 3000);
  }

  useEffect(() => {
    gsap
      .timeline({ defaults: { duration: 0.7 } })
      .to(textRef.current, { text: "" })
      .to(textRef.current, { text: curLove.name });
    setLoopStart(true);
    return () => {
      // gsap.to(textRef.current, { text: "" });
    };
  }, [curLove]);

  return (
    <ThingsBox ref={boxRef}>
      <span>
        I<HeartIcon />
      </span>
      <span ref={textRef}></span>
    </ThingsBox>
  );
};
