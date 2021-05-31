import { Title } from "@/components/Title";
import styled from "styled-components";

const SectionBox = styled.div`
  margin: 0 3rem;
  padding-top: 10rem;
`;

export function ProjectSection() {
  return (
    <SectionBox>
      <Title>Projects</Title>
    </SectionBox>
  );
}
