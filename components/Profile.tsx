import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { timelineFC, TimelineFCRef, useTimeline } from "../utils/timeline";
import styles from "../styles/Profile.module.scss";
import * as profile from "../data/profile";

const ProfilePic = (props: { className?: string }) => {
  return (
    <Image
      src="/profilepic.png"
      alt="Profile Picture"
      layout="responsive"
      width="100"
      height="100"
      className={props.className}
    />
  );
};

interface ProfileCardProps {
  name?: string;
  realname?: string;
  summary?: string;
}

const ProfileCard = timelineFC((props: ProfileCardProps, ref) => {
  const cardRef = useRef(null);

  useTimeline(ref, () => ({
    timeline() {
      const tl = gsap.timeline();

      tl.set(cardRef.current, { opacity: 0 });
      tl.to(cardRef.current, { opacity: 1 }, "+=50%");

      return tl;
    },
  }));

  return (
    <div ref={cardRef} className={styles.profileCard}>
      <div className={styles.profileCardPic}>
        <ProfilePic />
      </div>
      <div className={styles.profileCardContent}>
        <h2>{props.name}</h2>
        <h3>{props.realname}</h3>
        <p>{props.summary}</p>
      </div>
    </div>
  );
});

export const WhoAmISection = timelineFC((_, ref) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const profileCardRef = useRef<TimelineFCRef>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=300%",
        pin: true,
        pinSpacing: true,
        scrub: 0.1,
      },
    });

    const entertl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "+=100%",
        scrub: 0.1,
      },
    });
    entertl.set(titleRef.current, { text: "" });
    entertl.to(titleRef.current, {
      text: "Profile",
    });
    entertl.add(profileCardRef.current.timeline(), "<");
    // tl.fromTo(titleRef.current, { opacity: 1 }, { opacity: 0.5 });

    return () => {
      tl.kill();
      entertl.kill();
    };
  }, []);

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
        <h1 ref={titleRef}></h1>
        <ProfileCard
          ref={profileCardRef}
          name={profile.name}
          realname={profile.realName}
          summary={profile.summary}
        />
      </div>
    </div>
  );
});
