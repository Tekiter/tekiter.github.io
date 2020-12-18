import clsx from "clsx";
import { forwardRef } from "react";
import styles from "@/styles/IconButton.module.scss";

export interface IconButtonProps {
  children: any;
  onClick?: Function;
  href?: string;
  className?: string;
  tooltip?: string;
}

export const IconButton = forwardRef<HTMLAnchorElement, IconButtonProps>(
  (props, ref) => {
    function handleClick() {
      if (props.onClick instanceof Function) {
        props.onClick();
      }
    }
    return (
      <a
        ref={ref}
        className={clsx(styles.iconButton, props.className)}
        onClick={handleClick}
        href={props.href}
        title={props.tooltip}
      >
        <span className={styles.label}>{props.children}</span>
      </a>
    );
  }
);
