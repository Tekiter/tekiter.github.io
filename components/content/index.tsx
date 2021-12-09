import Intro from "@/data/intro.mdx";
import Skill from "@/data/skill.mdx";
import Project from "@/data/project.mdx";
import Activity from "@/data/activity.mdx";
import { StyledRender } from "./styledRender";

export function Content() {
  return (
    <StyledRender>
      <Intro />
      <Skill />
      <Project />
      <Activity />
    </StyledRender>
  );
}
