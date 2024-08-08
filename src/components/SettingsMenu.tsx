import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./SettingsMenu.module.css";

const SettingsMenu = ({
  className = "",
  propPadding,
  icsettings,
  onIcsettingsClick,
  propTextDecoration,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const setttingsStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const navigate = useNavigate();

  const onIcsettingsClick1 = useCallback(() => {
    navigate("/dashboard2");
  }, [navigate]);

  return (
    <div className={[styles.settingsMenu, className].join(" ")}>
      <div className={styles.icsettingsParent} style={frameDiv1Style}>
        <img
          className={styles.icsettingsIcon}
          loading="lazy"
          alt=""
          src={icsettings}
          onClick={onIcsettingsClick}
        />
        <div className={styles.setttings} style={setttingsStyle}>
          Setttings
        </div>
      </div>
    </div>
  );
};

SettingsMenu.propTypes = {
  className: PropTypes.string,
  icsettings: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propTextDecoration: PropTypes.any,

  /** Action props */
  onIcsettingsClick: PropTypes.func,
};

export default SettingsMenu;
