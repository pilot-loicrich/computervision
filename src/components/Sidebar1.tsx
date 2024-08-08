import FrameComponent from "./FrameComponent";
import DashboardMenu from "./DashboardMenu";
import PersonnelMenu from "./PersonnelMenu";
import PropTypes from "prop-types";
import styles from "./Sidebar1.module.css";

const Sidebar1 = ({ className = "" }) => {
  return (
    <div className={[styles.sidebar, className].join(" ")}>
      <FrameComponent />
      <DashboardMenu
        propAlignSelf="unset"
        propFlex="unset"
        icdashboard="/icdashboard.svg"
        propColor="#b2b2b2"
        propTextDecoration="none"
      />
      <div className={styles.sidebarInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.vectorWrapper}>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
          <div className={styles.cameras}>Cameras</div>
        </div>
      </div>
      <PersonnelMenu propAlignSelf="unset" propFlex="unset" />
      <div className={styles.sidebarChild}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.icsettingsParent}>
              <img
                className={styles.icsettingsIcon}
                loading="lazy"
                alt=""
                src="/icsettings2.svg"
              />
              <div className={styles.setttings}>Setttings</div>
            </div>
          </div>
          <div className={styles.divider} />
        </div>
      </div>
    </div>
  );
};

Sidebar1.propTypes = {
  className: PropTypes.string,
};

export default Sidebar1;
