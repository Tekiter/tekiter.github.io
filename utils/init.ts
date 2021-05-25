import { gsap } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function initGSAP() {
  gsap.registerPlugin(TextPlugin, ScrollTrigger);
}
