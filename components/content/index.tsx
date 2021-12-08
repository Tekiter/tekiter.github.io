import { MDXComponents } from "mdx/types";
import { MDXProvider } from "@mdx-js/react";
import { Title } from "@/components/common/Title";

import Intro from "@/data/intro.mdx";
import Skill from "@/data/skill.mdx";
import Project from "@/data/project.mdx";
import Activity from "@/data/activity.mdx";

export function Content() {
  const componentMap: MDXComponents = {
    h1: Title,
  };

  return (
    <MDXProvider components={componentMap}>
      <Intro />
      <Skill />
      <Project />
      <Activity />
    </MDXProvider>
  );
}
