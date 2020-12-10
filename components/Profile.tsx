import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { timelineFC, useTimeline } from "../utils/timeline";

export const WhoAmISection = timelineFC((_, ref) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      pin: true,
      pinSpacing: false,
    });

    return () => {
      tl.kill();
      st.kill();
    };
  });

  useTimeline(ref, () => ({
    timeline() {
      const tl = gsap.timeline();

      return tl;
    },
  }));

  return (
    <div ref={sectionRef} style={{ height: "100vh" }}>
      This is Tekiter profile section
    </div>
  );
});
