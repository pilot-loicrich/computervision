import Sidebar1 from "../components/Sidebar1";
import CamerasHeader from "../components/CamerasHeader";
import ActionButtons from "../components/ActionButtons";
import styles from "./Dashboard3.module.css";

const Dashboard3 = () => {
  return (
    <div className={styles.dashboard}>
      <section className={styles.backgroundImage} />
      <div className={styles.content}>
        <Sidebar1 />
      </div>
      <div className={styles.pageContent}>
        <div className={styles.contentHeader}>
          <div className={styles.settingsHeader}>
            <a className={styles.settings}>Settings</a>
            <div className={styles.settingsHeaderInner}>
              <div className={styles.frameChild} />
            </div>
          </div>
          <div className={styles.cameraList}>
            <div className={styles.navbarContentParent}>
              <div className={styles.navbarContent}>
                <img
                  className={styles.subtractIcon}
                  loading="lazy"
                  alt=""
                  src="/subtract.svg"
                />
                <div className={styles.div}>06</div>
                <div className={styles.cameras}>Cameras</div>
              </div>
              <div className={styles.frameParent}>
                <CamerasHeader
                  propBackgroundColor="#000"
                  propBorder="2px solid #ff5151"
                  propMinHeight="112px"
                />
                <CamerasHeader
                  propBackgroundColor="unset"
                  propBorder="1px solid #fff"
                  propMinHeight="unset"
                />
              </div>
              <CamerasHeader
                propBackgroundColor="unset"
                propBorder="1px solid #fff"
                propMinHeight="unset"
              />
            </div>
            <div className={styles.cameraListInner}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameItem} />
                <img
                  className={styles.singleCameraIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cameraSettings}>
        <form className={styles.cameraSettingsPanel}>
          <div className={styles.cameraSettingsContent}>
            <div className={styles.cameraSettingsForm}>
              <div className={styles.email}>
                <div className={styles.name}>
                  <span className={styles.name1}>Name</span>
                  <span className={styles.span}>*</span>
                </div>
                <div className={styles.background}>
                  <div className={styles.backgroundChild} />
                  <input
                    className={styles.camera7}
                    placeholder="Camera #7"
                    type="text"
                  />
                </div>
              </div>
              <div className={styles.email1}>
                <div className={styles.sector}>
                  <span className={styles.name1}>Sector</span>
                  <span className={styles.span}>*</span>
                </div>
                <div className={styles.background}>
                  <div className={styles.backgroundChild} />
                  <input
                    className={styles.west}
                    placeholder="West"
                    type="text"
                  />
                </div>
              </div>
              <div className={styles.email}>
                <div className={styles.department}>
                  <span className={styles.name1}>Department</span>
                  <span className={styles.span}>*</span>
                </div>
                <div className={styles.background}>
                  <div className={styles.backgroundChild} />
                  <input
                    className={styles.administration}
                    placeholder="Administration"
                    type="text"
                  />
                </div>
              </div>
              <div className={styles.cameraQuality}>
                <div className={styles.email3}>
                  <div className={styles.videoQuality}>
                    <span className={styles.name1}>Video quality</span>
                    <span className={styles.span}>*</span>
                  </div>
                  <div className={styles.background3}>
                    <div className={styles.rectangleDiv} />
                    <input
                      className={styles.gp}
                      placeholder="3GP"
                      type="text"
                    />
                  </div>
                </div>
                <div className={styles.email3}>
                  <div className={styles.videoQuality}>
                    <span className={styles.name1}>ips</span>
                    <span className={styles.span}>*</span>
                  </div>
                  <div className={styles.background3}>
                    <div className={styles.rectangleDiv} />
                    <input
                      className={styles.input}
                      placeholder="10"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.email}>
                <div className={styles.compressionMode}>
                  <span className={styles.name1}>Compression mode</span>
                  <span className={styles.span}>*</span>
                </div>
                <div className={styles.background5}>
                  <div className={styles.backgroundChild} />
                  <input
                    className={styles.xH256}
                    placeholder="x H.256"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
          <ActionButtons updatePersonnelInformatio="Update camera informations" />
        </form>
      </div>
    </div>
  );
};

export default Dashboard3;
