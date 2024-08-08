import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ className = "" }) => {
  return (
    <button className={[styles.button, className].join(" ")}>
      <b className={styles.button1}>Login</b>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
