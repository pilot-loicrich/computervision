import PropTypes from "prop-types";
import styles from "./ActionButtons.module.css";

const ActionButtons = ({ className = "", updatePersonnelInformatio }) => {
  return (
    <div className={[styles.actionButtons, className].join(" ")}>
      <button className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.updatePersonnelInformations}>
          {updatePersonnelInformatio}
        </div>
      </button>
      <button className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.createNewPersonnel}>Create new personnel</div>
      </button>
    </div>
  );
};

ActionButtons.propTypes = {
  className: PropTypes.string,
  updatePersonnelInformatio: PropTypes.string,
};

export default ActionButtons;
