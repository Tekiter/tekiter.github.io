import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  CSSProperties,
  forwardRef,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import { loveThing, loveThingList } from "../data/loveThings";
import * as profile from "../data/profile";
import styles from "../styles/Helloworld.module.scss";
import { timelineFC, TimelineFCRef, useTimeline } from "../utils/timeline";
import { TekiterLinks } from "./TekiterLinks";
import { Spacer } from "./utils";

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
const ScrollDownIcon = forwardRef<HTMLDivElement, { style?: CSSProperties }>(
  (props, ref) => {
    return (
      <div ref={ref} style={props.style} className={styles.scrolldownIcon}>
        <svg viewBox="0 0 247 390">
          <path
            className={styles.scrolldownWheel}
            d="M123.359,79.775l0,72.843"
          />
          <path
            className={styles.scrolldownMouse}
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
          />
        </svg>
      </div>
    );
  }
);

export const LoveThings = timelineFC((_, ref) => {
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

  useTimeline(ref, () => ({
    timeline() {
      const tl = gsap.timeline({
        onComplete: () => {
          setTimeout(() => setLoopStart(true), 0);
        },
      });

      tl.from(boxRef.current, { autoAlpha: 0, duration: 1 });
      return tl;
    },
  }));

  useEffect(() => {
    gsap
      .timeline({ defaults: { duration: 0.7 } })
      .to(textRef.current, { text: "" })
      .to(textRef.current, { text: curLove.name });
    return () => {
      // gsap.to(textRef.current, { text: "" });
    };
  }, [curLove]);

  return (
    <h3 ref={boxRef} className={styles.loveThings}>
      <span>
        I<HeartIcon />
      </span>
      <span ref={textRef}></span>
    </h3>
  );
});

export const HelloTekiterWorld = timelineFC((_, ref) => {
  const tekiterRef = useRef(null);
  const titleRef = useRef(null);
  const doThingsRef = useRef(null);

  useTimeline(ref, () => ({
    timeline() {
      const tl = gsap.timeline();
      tl.from(titleRef.current, { y: "+=300", autoAlpha: 0, duration: 1 });
      tl.to(
        tekiterRef.current,
        {
          duration: 0.5,
          text: ` ${profile.name}`,
          ease: "none",
        },
        "+=0.2"
      );
      tl.add(doThingsRef.current.timeline(), "+=0.3");
      return tl;
    },
  }));

  return (
    <div>
      <h1 className={styles.title} ref={titleRef}>
        <span>Hello,</span>
        <span ref={tekiterRef} className={styles.tekiter}></span>
        <span> world!</span>
      </h1>
      <Spacer size="3rem" />
      <LoveThings ref={doThingsRef} />
    </div>
  );
});

export const HelloworldSection = timelineFC((_, ref) => {
  const sectionRef = useRef(null);
  const titleRef = useRef<TimelineFCRef>(null);
  const linkRef = useRef<TimelineFCRef>(null);
  const scrollIconRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=70%",

        scrub: 0.1,
      },
    });
    // tl.from(sectionRef.current, { opacity: 1 });
    tl.to(sectionRef.current, { opacity: 0, ease: "power2.out" });

    return () => {
      tl.kill();
    };
  }, []);

  useTimeline(ref, () => ({
    timeline() {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(scrollIconRef.current, {
            y: "+=3rem",
            autoAlpha: 1,
            ease: "power2.out",
            duration: 2,
          });
        },
      });
      tl.add(titleRef.current.timeline());
      tl.add(linkRef.current.timeline(), "+=0.2");

      return tl;
    },
  }));

  return (
    <div ref={sectionRef} className={styles.sectionOuter}>
      <div className={styles.sectionInner}>
        <HelloTekiterWorld ref={titleRef} />
        <Spacer size="4rem" />
        <TekiterLinks ref={linkRef} />
        <ScrollDownIcon ref={scrollIconRef} style={{ visibility: "hidden" }} />
      </div>
    </div>
  );
});
