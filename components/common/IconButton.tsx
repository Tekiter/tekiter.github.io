import { forwardRef } from "react";
import styled from "styled-components";
import { lighten } from "polished";

const IconButtonBase = styled.a<{ size: string; background: string }>`
  background-color: ${(props) => props.background};

  border-width: 0;
  border-radius: 0%;
  padding: 0.4em;
  outline: none;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;

  text-decoration: none;

  display: inline-flex;
  align-items: center;

  box-sizing: border-box;

  font-size: ${(props) => props.size};

  transition-property: background-color, color;
  transition-duration: 500ms, 500ms;

  &:hover {
    background-color: ${(props) => lighten(0.7, props.background)};
  }
`;

const IconButtonLabel = styled.span<{ foreground: string }>`
  width: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;

  color: ${(props) => props.foreground};
`;

export interface IconButtonProps {
  children: any;
  onClick?: Function;
  href?: string;
  className?: string;
  tooltip?: string;
  size?: string;
  background?: string;
  foreground?: string;
}

export const IconButton = forwardRef<HTMLAnchorElement, IconButtonProps>(
  (props, ref) => {
    const { background = "#000000", foreground = "#ffffff", size = "" } = props;

    function handleClick() {
      if (props.onClick instanceof Function) {
        props.onClick();
      }
    }

    return (
      <IconButtonBase
        ref={ref}
        onClick={handleClick}
        href={props.href}
        title={props.tooltip}
        size={size}
        background={background}
      >
        <IconButtonLabel foreground={foreground}>
          {props.children}
        </IconButtonLabel>
      </IconButtonBase>
    );
  }
);
