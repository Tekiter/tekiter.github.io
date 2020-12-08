import { ForwardedRef, forwardRef, useImperativeHandle } from "react";

interface RefComponent {
  (props: any, ref: ForwardedRef<TimelineFCRef>): JSX.Element;
}

export interface TimelineFCRef {
  timeline: () => GSAPTimeline;
}

export const timelineFC = (component: RefComponent) => {
  return forwardRef<TimelineFCRef, any>(component);
};

export const useTimeline = (
  ref: ForwardedRef<TimelineFCRef>,
  timeline: () => TimelineFCRef
) => {
  useImperativeHandle(ref, timeline);
};
