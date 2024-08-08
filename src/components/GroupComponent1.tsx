import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent1.module.css";

const GroupComponent1 = ({
  className = "",
  propBackgroundImage,
  rectangle63,
  propWidth,
  camera1,
  cameraFeedPlaceholderItem,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const cameraFeedCameraStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={[styles.cameraFeedItemParent, className].join(" ")}>
      <div className={styles.cameraFeedItem}>
        <div className={styles.rectangleParent} style={groupDiv1Style}>
          <img className={styles.frameChild} alt="" src={rectangle63} />
          <div
            className={styles.cameraFeedCamera}
            style={cameraFeedCameraStyle}
          >
            <div className={styles.cameraFeedCameraChild} />
            <div className={styles.camera1}>{camera1}</div>
          </div>
          <div className={styles.cameraFeedDateContainer}>
            <div className={styles.cameraFeedDateContainerChild} />
            <div
              className={styles.date12062025}
            >{`Date : 12/06/2025 14:55:50 `}</div>
          </div>
        </div>
      </div>
      <div className={styles.cameraFeedSeparatorParent}>
        <img
          className={styles.cameraFeedSeparator}
          loading="lazy"
          alt=""
          src="/vector-12.svg"
        />
        <div className={styles.cameraFeedPlaceholderContai}>
          <div className={styles.cameraFeedPlaceholder}>03</div>
        </div>
        <div className={styles.cameraFeedSeparatorWrapper}>
          <img
            className={styles.cameraFeedSeparator1}
            loading="lazy"
            alt=""
            src="/vector-22.svg"
          />
        </div>
        <div className={styles.cameraFeedPlaceholderContai}>
          <div className={styles.cameraFeedPlaceholder}>00</div>
        </div>
        <div className={styles.cameraFeedBottomRowWrapper}>
          <div className={styles.cameraFeedBottomRow}>
            <img
              className={styles.cameraFeedSeparator2}
              loading="lazy"
              alt=""
              src="/vector-31.svg"
            />
            <div className={styles.cameraFeedPlaceholderContai2}>
              <div className={styles.cameraFeedPlaceholder}>
                {cameraFeedPlaceholderItem}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  rectangle63: PropTypes.string,
  camera1: PropTypes.string,
  cameraFeedPlaceholderItem: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
  propWidth: PropTypes.any,
};

export default GroupComponent1;
