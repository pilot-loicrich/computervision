import FrameComponent3 from "../components/FrameComponent3";
import PersonnelCardList from "../components/PersonnelCardList";
import FionaContent from "../components/FionaContent";
import styles from "./Dashboard2.module.css";

const Dashboard2 = () => {
  return (
    <div className={styles.dashboard}>
      <section
        className={styles.backgroundImage}
        data-scroll-to="backgroundImage"
      />
      <div className={styles.mainContent}>
        <div className={styles.sidebar}>
          <FrameComponent3 />
          <div className={styles.sideBarBackground}>
            <div className={styles.sideBarBackgroundChild} />
          </div>
        </div>
      </div>
      <div className={styles.layout}>
        <div className={styles.frameParent}>
          <div className={styles.personnelWrapper}>
            <a className={styles.personnel}>Personnel</a>
          </div>
          <div className={styles.searchBackgroundParent}>
            <div className={styles.searchBackground}>
              <div className={styles.searchBackgroundChild} />
            </div>
            <div className={styles.layout1}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.searchInputField}>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.frameItem} />
                    <input
                      className={styles.findAPersonnel}
                      placeholder="Find a personnel"
                      type="text"
                    />
                    <img
                      className={styles.frameInner}
                      alt=""
                      src="/frame-9@2x.png"
                    />
                  </div>
                  <PersonnelCardList
                    maskGroup="/mask-group@2x.png"
                    fabriceMoukete="Fabrice Moukete"
                    maskGroup1="/mask-group-1@2x.png"
                    maskGroup2="/mask-group-2@2x.png"
                    maskGroup3="/mask-group-3@2x.png"
                    maskGroup4="/mask-group-4@2x.png"
                    maskGroup5="/mask-group-5@2x.png"
                    maskGroup6="/mask-group-6@2x.png"
                    maskGroup7="/mask-group-7@2x.png"
                  />
                </div>
                <div className={styles.layoutParent}>
                  <div className={styles.layout2}>
                    <div className={styles.administratorHeader}>
                      <div className={styles.rectangleContainer}>
                        <div className={styles.rectangleDiv} />
                        <img
                          className={styles.pencilIcon}
                          loading="lazy"
                          alt=""
                          src="/pencil.svg"
                        />
                      </div>
                      <div className={styles.groupDiv}>
                        <div className={styles.frameChild1} />
                        <img
                          className={styles.vectorIcon}
                          loading="lazy"
                          alt=""
                          src="/vector-1.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.rectangleParent1}>
                      <div className={styles.frameChild2} />
                      <div className={styles.administrators}>
                        Administrators
                      </div>
                      <div className={styles.administratorDropdownIconWrapper}>
                        <img
                          className={styles.administratorDropdownIcon}
                          alt=""
                          src="/administrator-dropdown-icon.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.fionaListWrapper}>
                    <PersonnelCardList
                      propFlex="1"
                      propAlignSelf="stretch"
                      maskGroup="/mask-group-8@2x.png"
                      fabriceMoukete="Fiona Greavesm"
                      propAlignSelf1="stretch"
                      maskGroup1="/mask-group-9@2x.png"
                      propAlignSelf2="stretch"
                      maskGroup2="/mask-group-10@2x.png"
                      propAlignSelf3="stretch"
                      maskGroup3="/mask-group-11@2x.png"
                      propAlignSelf4="stretch"
                      maskGroup4="/mask-group-12@2x.png"
                      propAlignSelf5="stretch"
                      maskGroup5="/mask-group-13@2x.png"
                      propAlignSelf6="stretch"
                      maskGroup6="/mask-group-14@2x.png"
                      propAlignSelf7="stretch"
                      maskGroup7="/mask-group-15@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.verticalSpacer}>
                <div className={styles.verticalSpacerChild} />
                <div className={styles.verticalSpacerItem} />
              </div>
              <div className={styles.personnelListHeader}>
                <img
                  className={styles.maskGroupIcon}
                  loading="lazy"
                  alt=""
                  src="/mask-group-16@2x.png"
                />
                <div className={styles.personnelListHeaderContent}>
                  <div className={styles.fabriceMoukete}>Fabrice Moukete</div>
                </div>
              </div>
              <div className={styles.personnelListHeader1}>
                <img
                  className={styles.maskGroupIcon}
                  loading="lazy"
                  alt=""
                  src="/mask-group-16@2x.png"
                />
                <div className={styles.personnelListHeaderContent}>
                  <div className={styles.fabriceMoukete}>Fabrice Moukete</div>
                </div>
              </div>
              <div className={styles.personnelListHeader2}>
                <img
                  className={styles.maskGroupIcon}
                  loading="lazy"
                  alt=""
                  src="/mask-group-18@2x.png"
                />
                <div className={styles.personnelListHeaderContent}>
                  <div className={styles.fabriceMoukete}>Fabrice Moukete</div>
                </div>
              </div>
              <div className={styles.personnelListHeader3}>
                <img
                  className={styles.maskGroupIcon}
                  loading="lazy"
                  alt=""
                  src="/mask-group-18@2x.png"
                />
                <div className={styles.personnelListHeaderContent}>
                  <div className={styles.fabriceMoukete}>Fabrice Moukete</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.layout3}>
        <FionaContent />
      </div>
    </div>
  );
};

export default Dashboard2;
