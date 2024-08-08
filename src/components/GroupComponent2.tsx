import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent2.module.css";

const GroupComponent2 = ({
  className = "",
  propBackgroundImage,
  rectangle63,
  camera3,
  prop,
  prop1,
}) => {
  const groupDiv2Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.rectangleParent} style={groupDiv2Style}>
          <img className={styles.frameChild} alt="" src={rectangle63} />
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.camera3}>{camera3}</div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div
              className={styles.date12062025}
            >{`Date : 12/06/2025 14:55:50 `}</div>
          </div>
        </div>
      </div>
      <div className={styles.vectorParent}>
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector-12.svg"
        />
        <div className={styles.wrapper}>
          <div className={styles.div}>{prop}</div>
        </div>
        <div className={styles.vectorWrapper}>
          <img
            className={styles.vectorIcon1}
            loading="lazy"
            alt=""
            src="/vector-22.svg"
          />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.div}>00</div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.vectorGroup}>
            <img
              className={styles.vectorIcon2}
              loading="lazy"
              alt=""
              src="/vector-31.svg"
            />
            <div className={styles.div2}>{prop1}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
  rectangle63: PropTypes.string,
  camera3: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
};

export default GroupComponent2;
