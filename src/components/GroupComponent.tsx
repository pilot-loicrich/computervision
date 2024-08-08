import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent.module.css";

const GroupComponent = ({
  className = "",
  vector,
  propHeight,
  propHeight1,
  propDisplay,
  reactive,
  realtimeAnormalieDetectio,
}) => {
  const vectorIconStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const reactiveRealtimeAnormalieContainerStyle = useMemo(() => {
    return {
      height: propHeight1,
      display: propDisplay,
    };
  }, [propHeight1, propDisplay]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src={vector}
            style={vectorIconStyle}
          />
        </div>
      </div>
      <div
        className={styles.reactiveRealtimeAnormalieContainer}
        style={reactiveRealtimeAnormalieContainerStyle}
      >
        <p className={styles.reactive}>
          <b>{reactive}</b>
        </p>
        <p className={styles.realtimeAnormalieDetection}>
          {realtimeAnormalieDetectio}
        </p>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  vector: PropTypes.string,
  reactive: PropTypes.string,
  realtimeAnormalieDetectio: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propHeight1: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default GroupComponent;
