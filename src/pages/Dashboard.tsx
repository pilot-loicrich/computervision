import TopMenu from "../components/TopMenu";
import CamerasHeader from "../components/CamerasHeader";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <section
        className={styles.backgroundImage}
        data-scroll-to="backgroundImage"
      />
      <div className={styles.sidebar}>
        <TopMenu />
        <div className={styles.sidebarBottom}>
          <div className={styles.bottomShape} />
        </div>
      </div>
      <section className={styles.content}>
        <div className={styles.mainView}>
          <div className={styles.dashboardView}>
            <div className={styles.dashboardHeader}>
              <a className={styles.dashboard1}>Dashboard</a>
              <div className={styles.dashboardHeaderInner}>
                <div className={styles.frameChild} />
              </div>
            </div>
            <div className={styles.contentView}>
              <div className={styles.subtractParent}>
                <img
                  className={styles.subtractIcon}
                  alt=""
                  src="/subtract.svg"
                />
                <div className={styles.detectedHeaderWrapper}>
                  <div className={styles.detectedHeader}>
                    <img
                      className={styles.detectedIcon}
                      loading="lazy"
                      alt=""
                      src="/vector-11.svg"
                    />
                    <div className={styles.detectedTitle}>
                      <div className={styles.detectedNumberParent}>
                        <div className={styles.detectedNumber}>120</div>
                        <div className={styles.personsDetected}>
                          Persons detected
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.camerasHeaderParent}>
                  <CamerasHeader />
                  <div className={styles.cameraGrid}>
                    <div className={styles.gridHeader}>
                      <div className={styles.gridContent}>
                        <div className={styles.rowOne}>
                          <div className={styles.rowTwo}>
                            <div className={styles.rowThree}>
                              <img
                                className={styles.liveIcons}
                                alt=""
                                src="/vector-21.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.camera2}>Camera #2</div>
                        </div>
                        <div className={styles.rowOne}>
                          <div className={styles.rowTwo}>
                            <div className={styles.rowThree}>
                              <img
                                className={styles.liveIcons}
                                alt=""
                                src="/vector-21.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.camera2}>Camera #3</div>
                        </div>
                        <div className={styles.rowOne}>
                          <div className={styles.rowTwo}>
                            <div className={styles.rowThree}>
                              <img
                                className={styles.liveIcons}
                                alt=""
                                src="/vector-21.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.camera2}>Camera #4</div>
                        </div>
                      </div>
                      <div className={styles.gridFooter}>
                        <div className={styles.cameraAlert}>
                          <div className={styles.alertContent}>
                            <div className={styles.vectorFrame}>
                              <img
                                className={styles.vectorIcon2}
                                loading="lazy"
                                alt=""
                                src="/vector-3.svg"
                              />
                            </div>
                            <div className={styles.alertData}>
                              <div className={styles.vectorParent}>
                                <img
                                  className={styles.vectorIcon3}
                                  alt=""
                                  src="/vector-4.svg"
                                />
                                <img
                                  className={styles.alertOctagonIcon}
                                  loading="lazy"
                                  alt=""
                                  src="/alertoctagon.svg"
                                />
                              </div>
                            </div>
                            <div className={styles.vectorGroup}>
                              <img
                                className={styles.vectorIcon4}
                                loading="lazy"
                                alt=""
                                src="/vector-5.svg"
                              />
                              <div className={styles.frameItem} />
                            </div>
                          </div>
                          <div className={styles.alertCaptionWrapper}>
                            <div className={styles.alertCaption}>
                              <div className={styles.alertDescription}>
                                <div className={styles.div}>10</div>
                              </div>
                              <div className={styles.detailsDataTwo}>02</div>
                              <div className={styles.detailsDataThree}>05</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.footerRowOne}>
                          <div className={styles.footerRowTwo}>
                            <div className={styles.footerRowThree}>
                              <img
                                className={styles.vectorIcon2}
                                loading="lazy"
                                alt=""
                                src="/vector-3.svg"
                              />
                            </div>
                            <div className={styles.footerRowThree}>
                              <img
                                className={styles.vectorIcon6}
                                loading="lazy"
                                alt=""
                                src="/vector-4.svg"
                              />
                            </div>
                            <img
                              className={styles.alertIcons}
                              loading="lazy"
                              alt=""
                              src="/vector-5.svg"
                            />
                          </div>
                          <div className={styles.alertDetails}>
                            <div className={styles.alertCaption}>
                              <div className={styles.alertDescription}>
                                <div className={styles.div}>10</div>
                              </div>
                              <div className={styles.detailsDataTwo}>02</div>
                              <div className={styles.detailsDataThree}>05</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.footerRowOne}>
                          <div className={styles.footerRowTwo}>
                            <div className={styles.footerRowThree}>
                              <img
                                className={styles.vectorIcon2}
                                loading="lazy"
                                alt=""
                                src="/vector-3.svg"
                              />
                            </div>
                            <div className={styles.footerRowThree}>
                              <img
                                className={styles.vectorIcon6}
                                loading="lazy"
                                alt=""
                                src="/vector-4.svg"
                              />
                            </div>
                            <img
                              className={styles.alertIcons}
                              loading="lazy"
                              alt=""
                              src="/vector-5.svg"
                            />
                          </div>
                          <div className={styles.alertDetails}>
                            <div className={styles.alertCaption}>
                              <div className={styles.alertDescription}>
                                <div className={styles.div}>10</div>
                              </div>
                              <div className={styles.detailsDataTwo}>02</div>
                              <div className={styles.detailsDataThree}>05</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cameraItemParent}>
                <div className={styles.cameraItem}>
                  <div className={styles.rowTwo}>
                    <div className={styles.rowThree}>
                      <img
                        className={styles.liveIcons}
                        loading="lazy"
                        alt=""
                        src="/vector-21.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.camera2}>Camera #5</div>
                </div>
                <div className={styles.cameraStatus}>
                  <div className={styles.footerRowTwo}>
                    <div className={styles.footerRowThree}>
                      <img
                        className={styles.vectorIcon10}
                        loading="lazy"
                        alt=""
                        src="/vector-3.svg"
                      />
                    </div>
                    <div className={styles.footerRowThree}>
                      <img
                        className={styles.vectorIcon11}
                        loading="lazy"
                        alt=""
                        src="/vector-4.svg"
                      />
                    </div>
                    <img
                      className={styles.vectorIcon12}
                      loading="lazy"
                      alt=""
                      src="/vector-5.svg"
                    />
                  </div>
                  <div className={styles.alertDetails}>
                    <div className={styles.alertCaption}>
                      <div className={styles.alertDescription}>
                        <div className={styles.div6}>10</div>
                      </div>
                      <div className={styles.div7}>02</div>
                      <div className={styles.div8}>05</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent2 />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
