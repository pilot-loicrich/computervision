import FrameComponent1 from "../components/FrameComponent1";
import FeatureResume from "../components/FeatureResume";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <FrameComponent1 />
      <section className={styles.frameParent}>
        <div className={styles.heroImageParent}>
          <div className={styles.heroImage}>
            <div className={styles.heroImageContainer}>
              <div className={styles.heroImageBackground} />
              <div className={styles.heroImageOverlay} />
              <img
                className={styles.whatsappImage2024080213}
                loading="lazy"
                alt=""
                src="/whatsapp-image-20240802--135717-5dd8ef88-1@2x.png"
              />
            </div>
          </div>
          <button className={styles.getStartedWrapper}>
            <b className={styles.getStarted}>Get started !</b>
          </button>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <h1 className={styles.revolutioniseYourAttendanceContainer}>
              <p className={styles.revolutionise}>{`Revolutionise `}</p>
              <p className={styles.revolutionise}>
                <span>{`your Attendance `}</span>
                <span className={styles.tracking}>Tracking</span>
              </p>
            </h1>
          </div>
          <div className={styles.efficientAccurateAnd}>
            Efficient, accurate, and hassle-free attendance management using
            advanced computer vision.
          </div>
        </div>
        <FeatureResume />
      </section>
    </div>
  );
};

export default LandingPage;
