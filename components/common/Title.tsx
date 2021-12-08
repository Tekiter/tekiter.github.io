import { color } from "@/styles";
import styled from "styled-components";

const HLine = styled.div`
  height: 0.25em;
  background-color: ${color.darkShade};
`;

interface TitleProps {
  className?: string;
  children?: React.ReactNode;
}

const TitleBase = (props: TitleProps) => {
  const { children = null, className } = props;
  return (
    <div className={className}>
      <h1>{children}</h1>
      <HLine />
    </div>
  );
};

export const Title = styled(TitleBase)`
  font-size: 1.2rem;
  font-weight: 600;
  width: fit-content;
  color: ${color.darkShade};
  margin-bottom: 0.5em;
`;
