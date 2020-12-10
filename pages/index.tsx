import { gsap } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Head from "next/head";
import { useEffect, useRef } from "react";
import { HelloTekiterWorld, HelloworldSection } from "../components/Helloworld";
import { WhoAmISection } from "../components/Profile";
import { TekiterLinks } from "../components/TekiterLinks";
import { Spacer } from "../components/utils";
import styles from "../styles/IndexPage.module.scss";
import { TimelineFCRef } from "../utils/timeline";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

export default function Home() {
  const sectionRefs = useRef<TimelineFCRef[]>([]);

  useEffect(() => {
    const tl = gsap.timeline();
    sectionRefs.current.forEach((section) => {
      tl.add(section.timeline());
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Tekiter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HelloworldSection ref={(r) => sectionRefs.current.push(r)} />
        <WhoAmISection ref={(r) => sectionRefs.current.push(r)} />
      </main>
    </div>
  );
}
