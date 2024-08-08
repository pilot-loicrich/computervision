import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./CamerasHeader.module.css";

const CamerasHeader = ({
  className = "",
  propBackgroundColor,
  propBorder,
  propMinHeight,
}) => {
  const camerasHeaderStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      border: propBorder,
      minHeight: propMinHeight,
    };
  }, [propBackgroundColor, propBorder, propMinHeight]);

  return (
    <div
      className={[styles.camerasHeader, className].join(" ")}
      style={camerasHeaderStyle}
    >
      <div className={styles.camerasTitle}>
        <div className={styles.cameraIconPaddingWrapper}>
          <div className={styles.cameraIconPadding}>
            <img
              className={styles.cameraIcon}
              loading="lazy"
              alt=""
              src="/vector-21.svg"
            />
          </div>
        </div>
        <div className={styles.camera1}>Camera #1</div>
      </div>
      <div className={styles.camerasContent}>
        <div className={styles.cameraItemParent}>
          <div className={styles.cameraItem}>
            <img
              className={styles.cameraLiveIcon}
              loading="lazy"
              alt=""
              src="/vector-3.svg"
            />
          </div>
          <div className={styles.cameraData}>
            <div className={styles.cameraPersons}>
              <img
                className={styles.personIcon}
                loading="lazy"
                alt=""
                src="/vector-4.svg"
              />
              <div className={styles.personCount} />
            </div>
          </div>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector-5.svg"
          />
        </div>
        <div className={styles.cameraDetails}>
          <div className={styles.detailsLabel}>
            <div className={styles.detailsPlaceholderWrapper}>
              <div className={styles.detailsPlaceholder}>10</div>
            </div>
            <div className={styles.detailsNumber}>02</div>
            <div className={styles.detailsNumber1}>05</div>
          </div>
        </div>
      </div>
    </div>
  );
};

CamerasHeader.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propBorder: PropTypes.any,
  propMinHeight: PropTypes.any,
};

export default CamerasHeader;
