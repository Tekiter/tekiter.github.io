import { gsap } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Head from "next/head";
import { useEffect, useRef } from "react";
import { HelloworldSection } from "../components/Helloworld";
import { WhoAmISection } from "../components/Profile";
import styles from "../styles/IndexPage.module.scss";
import { TimelineFCRef } from "../utils/timeline";
import clsx from "clsx";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

interface SectionRefsDict {
  helloworld?: TimelineFCRef;
  whoami?: TimelineFCRef;
}

export default function Home() {
  const sectionRefs = useRef<SectionRefsDict>({});

  const mainRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power2.out",
        duration: 1,
      },
    });
    tl.add(sectionRefs.current.helloworld.timeline());
    tl.set(mainRef.current, { css: { overflowY: "auto", height: "auto" } });

    return () => tl.kill();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Tekiter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main ref={mainRef} className={clsx(styles.main, styles.blockScroll)}>
        <HelloworldSection ref={(r) => (sectionRefs.current.helloworld = r)} />

        <WhoAmISection ref={(r) => (sectionRefs.current.whoami = r)} />
      </main>
    </div>
  );
}
