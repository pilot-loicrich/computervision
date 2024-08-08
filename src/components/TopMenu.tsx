import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DashboardMenu from "./DashboardMenu";
import PersonnelMenu from "./PersonnelMenu";
import SettingsMenu from "./SettingsMenu";
import PropTypes from "prop-types";
import styles from "./TopMenu.module.css";

const TopMenu = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='backgroundImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGroupContainerClick = useCallback(() => {
    navigate("/dashboard1");
  }, [navigate]);

  const onIcsettingsClick = useCallback(() => {
    navigate("/dashboard2");
  }, [navigate]);

  const onGroupContainerClick1 = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  const onGroupContainerClick2 = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className={[styles.topMenu, className].join(" ")}>
      <div className={styles.frameParent} onClick={onGroupContainerClick1}>
        <div className={styles.visionIconPaddingWrapper}>
          <img
            className={styles.visionIconPadding}
            loading="lazy"
            alt=""
            src="/frame@2x.png"
          />
        </div>
        <div className={styles.smartdsvision}>SmartDsVision</div>
        <div className={styles.frameChild} />
      </div>
      <DashboardMenu
        onFrameContainerClick={onFrameContainerClick}
        icdashboard="/icdashboard1.svg"
      />
      <div className={styles.camerasMenu}>
        <div className={styles.frameGroup} onClick={onGroupContainerClick2}>
          <div className={styles.camerasIconPaddingWrapper}>
            <div className={styles.camerasIconPadding}>
              <img
                className={styles.camerasIcon}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
          <div className={styles.cameras}>Cameras</div>
        </div>
      </div>
      <PersonnelMenu onGroupContainerClick2={onGroupContainerClick} />
      <SettingsMenu
        icsettings="/icsettings1.svg"
        onIcsettingsClick={onIcsettingsClick}
      />
    </div>
  );
};

TopMenu.propTypes = {
  className: PropTypes.string,
};

export default TopMenu;
