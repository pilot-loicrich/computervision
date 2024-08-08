import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./Login.module.css";

const Login = ({ className = "" }) => {
  return (
    <form className={[styles.login, className].join(" ")}>
      <section className={styles.backgroundImage} />
      <div className={styles.content}>
        <div className={styles.leftPane}>
          <img
            className={styles.emptyPaneIcon}
            loading="lazy"
            alt=""
            src="/frame2@2x.png"
          />
        </div>
        <div className={styles.loginInfo}>
          <h1 className={styles.login1}>Login</h1>
        </div>
        <div className={styles.credentials}>
          <div className={styles.inputFields}>
            <div className={styles.username}>
              <span className={styles.username1}>Username</span>
              <span className={styles.span}>*</span>
            </div>
            <div className={styles.background}>
              <div className={styles.backgroundChild} />
              <input
                className={styles.enterYourUser}
                placeholder="Enter your user name"
                type="text"
              />
            </div>
          </div>
          <div className={styles.inputFields}>
            <div className={styles.password}>
              <span className={styles.username1}>Password</span>
              <span className={styles.span}>*</span>
            </div>
            <div className={styles.background1}>
              <div className={styles.backgroundChild} />
              <input
                className={styles.enterYourPassword}
                placeholder="Enter your password"
                type="text"
              />
              <img
                className={styles.removeRedEyeIcon}
                alt=""
                src="/remove-red-eye.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <Button />
        <div className={styles.signup}>
          <div className={styles.noAccountYetParent}>
            <div className={styles.noAccountYet}>No account yet ?</div>
            <b className={styles.crerUnCompte}> Sign Up</b>
          </div>
        </div>
      </div>
    </form>
  );
};

Login.propTypes = {
  className: PropTypes.string,
};

export default Login;
