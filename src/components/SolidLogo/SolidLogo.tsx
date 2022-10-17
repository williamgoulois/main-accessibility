import solidJsLogo from "./logo.svg";
import styles from "./SolidLogo.module.css";
import cx from 'classnames'

export const SolidLogo = () => {
  return <img src={solidJsLogo} class={cx("h-16 w-16", styles.rotate)} alt="Solidjs logo" />;
};
