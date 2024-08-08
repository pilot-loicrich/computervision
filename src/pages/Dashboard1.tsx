import Sidebar from "../components/Sidebar";
import CameraFeedGrid from "../components/CameraFeedGrid";
import styles from "./Dashboard1.module.css";

const Dashboard1 = () => {
  return (
    <div className={styles.dashboard}>
      <section
        className={styles.backgroundImage}
        data-scroll-to="backgroundImage"
      />
      <Sidebar />
      <section className={styles.frameParent}>
        <div className={styles.camerasParent}>
          <a className={styles.cameras}>Cameras</a>
          <div className={styles.camerasContent}>
            <div className={styles.camerasBackground} />
          </div>
        </div>
        <div className={styles.cameraFeedGridWrapper}>
          <CameraFeedGrid />
        </div>
      </section>
    </div>
  );
};

export default Dashboard1;
