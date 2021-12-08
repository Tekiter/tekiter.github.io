import { color } from "@/styles";
import styled from "styled-components";

const SimpleLink = styled.a`
  text-decoration: none;
  padding: 0.3em 0.7em;
  font-size: 1.7rem;
  font-weight: bold;

  :not(:last-child) {
    margin-right: 1em;
  }

  background-color: ${color.lightShade};
  color: ${color.darkShade};

  :hover {
    color: ${color.lightShade};
    background-color: ${color.darkShade};
  }

  transition-property: color, background-color;
  transition-duration: 300ms, 300ms;
`;

export function Links() {
  return (
    <div>
      <SimpleLink href="https://github.com/Tekiter" target="_blank">
        Github
      </SimpleLink>
      <SimpleLink href="https://tekiter.tistory.com" target="_blank">
        Tech Blog
      </SimpleLink>
    </div>
  );
}
