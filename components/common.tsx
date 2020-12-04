import { ReactElement } from "react";
import styles from "../styles/Common.module.scss";

export interface IconButtonProps {
  children: ReactElement;
  onClick?: Function;
}

export const IconButton = (props: IconButtonProps): ReactElement => {
  function handleClick() {
    if (props.onClick instanceof Function) {
      props.onClick();
    }
  }
  return (
    <button className={styles.iconButton} onClick={handleClick}>
      {props.children}
    </button>
  );
};
