import { MDXComponents } from "mdx/types";
import { MDXProvider } from "@mdx-js/react";
import { ReactNode } from "react";
import styled from "styled-components";
import { Title } from "../common/Title";

interface StyledRenderProps {
  children: ReactNode;
}

export function StyledRender(props: StyledRenderProps) {
  const componentMap: MDXComponents = {
    h1: TopTitle,
    h2: SubTitle,
    h3: MiniTitle,
    p: Paragraph,
    li: ListItem,
    hr: HorizontalLine,
    a: Hyperlink,
    strong: Strong,
    FlexBox,
    Box,
  };

  return (
    <MDXProvider components={componentMap}>
      <StyledRenderOuter>{props.children}</StyledRenderOuter>
    </MDXProvider>
  );
}

const StyledRenderOuter = styled.div`
  & * {
  }
`;

const TopTitle = styled(Title)`
  font-size: 1.5rem;
  font-weight: 500;

  margin-top: 3rem;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 400;

  margin-bottom: 1em;

  line-height: 1.4em;
`;

const SubTitle = styled.h2`
  font-weight: 700;
  font-size: 2rem;

  margin-top: 0.9em;
  margin-bottom: 0.3em;
`;

const MiniTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;

  margin-top: 0.9em;
  margin-bottom: 0.3em;
`;

const ListItem = styled.li`
  &::before {
    content: "-";
    margin-right: 0.4em;
  }

  margin-bottom: 0.3em;

  line-height: 1.2em;
`;

const HorizontalLine = styled.hr`
  border-top: 1px solid #c3c3c3;
`;

const Hyperlink = styled.a`
  text-decoration: underline dotted;
  color: inherit;
`;

const Strong = styled.strong`
  font-weight: 700;
`;

const FlexBox = styled.div`
  display: flex;
`;

interface BoxProps {
  width?: string;
  grow?: string;
}

const Box = styled.div<BoxProps>`
  width: ${(props) => props.width ?? "unset"};

  flex-grow: ${(props) => props.grow ?? "1"};
`;
