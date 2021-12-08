import { CSSProperties, forwardRef } from "react";
import styled from "styled-components";

export interface SpacerProps {
  direction?: "horizontal" | "vertical";
  size?: number | string;
}

export const Spacer = forwardRef<HTMLDivElement, SpacerProps>((props, ref) => {
  const { direction = "vertical", size = "1em" } = props;

  const styleobj: CSSProperties = {};

  if (direction === "vertical") {
    styleobj.marginTop = size;
  } else {
    styleobj.marginLeft = size;
  }

  return (
    <div ref={ref} style={styleobj}>
      {" "}
    </div>
  );
});
