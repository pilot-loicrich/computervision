import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={[styles.insightsMetricsParent, className].join(" ")}>
      <div className={styles.insightsMetrics}>
        <img
          className={styles.subtractIcon}
          loading="lazy"
          alt=""
          src="/subtract-1.svg"
        />
        <div className={styles.abnormalitiesMetric}>15</div>
        <div className={styles.notifications}>Notifications</div>
      </div>
      <div className={styles.insightsMetrics1}>
        <img
          className={styles.subtractIcon1}
          loading="lazy"
          alt=""
          src="/subtract-2.svg"
        />
        <div className={styles.abnormalitiesCapturedWrapper}>
          <div className={styles.abnormalitiesCaptured}>
            Abnormalities captured
          </div>
        </div>
        <div className={styles.div}>12</div>
      </div>
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-63@2x.png" />
        <div className={styles.activityItem}>
          <div className={styles.activityItemChild} />
          <div className={styles.camera1}>Camera #1</div>
        </div>
        <div className={styles.activityItem1}>
          <div className={styles.activityItemItem} />
          <div
            className={styles.date12062025}
          >{`Date : 12/06/2025 14:55:50 `}</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
