import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { timelineFC, useTimeline } from "../utils/timeline";
import styles from "../styles/Profile.module.scss";

const ProfilePic = () => {
  return (
    <div style={{ height: "10rem" }}>
      <Image
        src="/profilepic.png"
        alt="Profile Picture"
        layout="intrinsic"
        width="100"
        height="100"
      />
    </div>
  );
};

const ProfileCard = () => {
  return <ProfilePic />;
};

export const WhoAmISection = timelineFC((_, ref) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      pin: true,
      // pinSpacing: false,
    });

    return () => {
      tl.kill();
      st.kill();
    };
  });

  useTimeline(ref, () => ({
    timeline() {
      const tl = gsap.timeline();

      tl.to(sectionRef.current, { autoAlpha: 1 });

      return tl;
    },
  }));

  return (
    <div ref={sectionRef} className={styles.sectionOuter}>
      <div className={styles.sectionInner}>
        <h1>Profile</h1>
        <ProfileCard />
      </div>
    </div>
  );
});
