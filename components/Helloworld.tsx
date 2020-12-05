import gsap from "gsap";
import { forwardRef, useImperativeHandle, useRef } from "react";
import styles from "../styles/Helloworld.module.scss";

export interface HelloTekiterWorldRef {
  timeline: () => GSAPTimeline;
}

export const HelloTekiterWorld = forwardRef<HelloTekiterWorldRef, {}>(
  (_, ref) => {
    const tekiterRef = useRef(null);
    const titleRef = useRef(null);

    useImperativeHandle(ref, () => ({
      timeline() {
        const tl = gsap.timeline();
        tl.from(titleRef.current, { y: "+=300", autoAlpha: 0, duration: 1 });
        tl.to(
          tekiterRef.current,
          {
            duration: 0.5,
            text: " Tekiter",
            ease: "none",
          },
          ">0.5"
        );
        return tl;
      },
    }));

    return (
      <h1 className={styles.title} ref={titleRef}>
        <span>Hello,</span>
        <span ref={tekiterRef} className={styles.tekiter}></span>
        <span> world!</span>
      </h1>
    );
  }
);
