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
  // const helloworldSectionRef = useRef<TimelineFCRef>();
  // const sectionRefs = useRef<{[key: string]:TimelineFCRef}>({});

  const mainRef = useRef();
  const spacerRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power2.out",
      },
    });
    tl.set(spacerRef.current, { height: "100vh" });
    tl.add(sectionRefs.current.helloworld.timeline());
    tl.to(mainRef.current, { css: { overflowY: "auto", height: "auto" } });
    tl.to(spacerRef.current, { height: "auto" }, "<");
    tl.add(sectionRefs.current.whoami.timeline(), "<");
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Tekiter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main ref={mainRef} className={clsx(styles.main, styles.blockScroll)}>
        <div ref={spacerRef}>
          <HelloworldSection
            ref={(r) => (sectionRefs.current.helloworld = r)}
          />
        </div>

        <WhoAmISection ref={(r) => (sectionRefs.current.whoami = r)} />
      </main>
    </div>
  );
}
