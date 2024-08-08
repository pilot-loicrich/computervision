import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./DashboardMenu.module.css";

const DashboardMenu = ({
  className = "",
  propAlignSelf,
  onFrameContainerClick,
  propFlex,
  icdashboard,
  propColor,
  propTextDecoration,
}) => {
  const dashboardMenuStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const frameDivStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const dashboardStyle = useMemo(() => {
    return {
      color: propColor,
      textDecoration: propTextDecoration,
    };
  }, [propColor, propTextDecoration]);

  const onFrameContainerClick1 = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='backgroundImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className={[styles.dashboardMenu, className].join(" ")}
      style={dashboardMenuStyle}
    >
      <div
        className={styles.dashboardIconPaddingParent}
        onClick={onFrameContainerClick}
        style={frameDivStyle}
      >
        <div className={styles.dashboardIconPadding}>
          <img
            className={styles.icdashboardIcon}
            loading="lazy"
            alt=""
            src={icdashboard}
          />
        </div>
        <div className={styles.dashboard} style={dashboardStyle}>
          Dashboard
        </div>
      </div>
    </div>
  );
};

DashboardMenu.propTypes = {
  className: PropTypes.string,
  icdashboard: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propColor: PropTypes.any,
  propTextDecoration: PropTypes.any,

  /** Action props */
  onFrameContainerClick: PropTypes.func,
};

export default DashboardMenu;
