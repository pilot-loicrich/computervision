import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSignUpTextClick = useCallback(() => {
    navigate("/dashboard2");
  }, [navigate]);

  const onSignInTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header className={[styles.topBarWrapper, className].join(" ")}>
      <div className={styles.topBar}>
        <div className={styles.frameParent}>
          <div className={styles.logoParent}>
            <div className={styles.logo} />
            <img
              className={styles.topBarElement}
              loading="lazy"
              alt=""
              src="/frame1@2x.png"
            />
          </div>
          <div className={styles.smartdsvisionWrapper}>
            <div className={styles.smartdsvision}>SmartDsVision</div>
          </div>
        </div>
        <div className={styles.topBarDivider} />
        <div className={styles.frameGroup}>
          <button className={styles.signUpWrapper}>
            <b className={styles.signUp} onClick={onSignUpTextClick}>
              Sign Up
            </b>
          </button>
          <div className={styles.signInWrapper}>
            <div className={styles.signIn} onClick={onSignInTextClick}>
              Sign In
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
