import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  return (
    <div className={[styles.sidebarInner, className].join(" ")}>
      <div
        className={styles.smartDsVisionContainerParent}
        onClick={onGroupContainerClick}
      >
        <div className={styles.smartDsVisionContainer}>
          <img
            className={styles.smartDsVisionInner}
            loading="lazy"
            alt=""
            src="/frame@2x.png"
          />
        </div>
        <div className={styles.smartdsvision}>SmartDsVision</div>
        <div className={styles.frameChild} />
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
