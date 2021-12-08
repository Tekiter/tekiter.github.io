import styled from "styled-components";
import { MDXComponents } from "mdx/types";
import { MDXProvider } from "@mdx-js/react";
import { Title } from "@/components/common/Title";

import Intro from "@/data/intro.mdx";
import Skill from "@/data/skill.mdx";
import Project from "@/data/project.mdx";
import Activity from "@/data/activity.mdx";

export function Content() {
  const componentMap: MDXComponents = {
    h1: TopTitle,
    h2: SubTitle,
    h3: MiniTitle,
    p: Paragraph,
    li: ListItem,
    hr: HorizontalLine,
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

const TopTitle = styled(Title)`
  margin-top: 3rem;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  margin-bottom: 1em;
`;

const SubTitle = styled.h2`
  font-weight: 700;
  font-size: 1.6rem;
`;

const MiniTitle = styled.h3`
  font-weight: 600;
  font-size: 1.4rem;
  margin-top: 0.7em;
  margin-bottom: 0.2em;
`;

const ListItem = styled.li`
  &::before {
    content: "-";
    margin-right: 0.4em;
  }

  margin-bottom: 0.3em;
`;

const HorizontalLine = styled.hr``;
