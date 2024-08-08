import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./PersonnelMenu.module.css";

const PersonnelMenu = ({
  className = "",
  propAlignSelf,
  onGroupContainerClick2,
  propFlex,
}) => {
  const personnelMenuStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const groupDivStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/dashboard1");
  }, [navigate]);

  return (
    <div
      className={[styles.personnelMenu, className].join(" ")}
      style={personnelMenuStyle}
    >
      <div
        className={styles.frameParent}
        onClick={onGroupContainerClick2}
        style={groupDivStyle}
      >
        <div className={styles.icrecruitmentWrapper}>
          <img
            className={styles.icrecruitmentIcon}
            loading="lazy"
            alt=""
            src="/icrecruitment1@2x.png"
          />
        </div>
        <div className={styles.personnel}>Personnel</div>
      </div>
    </div>
  );
};

PersonnelMenu.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,

  /** Action props */
  onGroupContainerClick2: PropTypes.func,
};

export default PersonnelMenu;
