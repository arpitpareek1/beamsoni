import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import SkillBarItem from "../../common/skill-bar";
import CircleBar from "../../common/circle-bar";
import shape1 from "../../../../public/assets/img/shape/shape-11.png";
import shape2 from "../../../../public/assets/img/shape/shape-11-dark.png";
import shape3 from "../../../../public/assets/img/shape/shape-12.png";
import image1 from "../../../../public/assets/img/about/T1.png";
import image2 from "../../../../public/assets/img/about/T2.png";

const About = () => {
  const [openVideo, setOpenVideo] = useState(false);
  const openVideoModal = () => {
    setOpenVideo(true);
  };
  return (
    <>
      <div className="about__one section-padding pt-0">
        <img className="about__one-shape dark-n" src={shape1.src} alt="shape" />
        <img
          className="about__one-shape light-n"
          src={shape2.src}
          alt="shape"
        />
        <div className="container">
          <div className="row al-center">
            <div className="col-xl-6 col-lg-5 lg-mb-25">
              <div className="about__one-left">
                <div className="about__one-left-image dark_image">
                  <img src={image1.src} alt="about-image" />
                  <img
                    className="about__one-left-image-shape"
                    src={shape3.src}
                    alt="shape"
                  />
                  <div className="about__one-left-image-two">
                    <img src={image2.src} alt="about-image" />
                  </div>
                  <div className="about__one-left-image-content">
                    <CircleBar progressBar={98} />
                    <h6>Project Success Rate</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="about__one-right">
                <div className="about__one-right-title">
                  <span className="subtitle-one">Our Story</span>
                  <h2>Pioneering Sustainable Energy</h2>
                  <p>
                    Founded in the heart of Jaipur, Beamsonic Energy
                    Private Limited is dedicated to promoting renewable energy
                    across India. Our journey began with a vision to make solar
                    power accessible and affordable for all.
                  </p>
                </div>
                {/* <div className="about__one-right-skill">
                                <div className="skill__area-item">
                                    <div className="skill__area-item-content">
                                        <h6>Hybrid Energy</h6>
                                    </div>
                                    <div className="skill__area-item-inner">
                                        <SkillBarItem countUp={76} />
                                    </div>
                                </div>
                                <div className="skill__area-item">
                                    <div className="skill__area-item-content">
                                        <h6>Wind Turbines</h6>
                                    </div>
                                    <div className="skill__area-item-inner">
                                        <SkillBarItem countUp={60} />
                                    </div>
                                </div>
                            </div>
                            <div className="about__one-right-bottom">
                                <div className="about__one-right-bottom-btn">
                                    <Link className="btn-one" href="/about">Unlock Power</Link>
                                </div>
                                <div className="about__one-right-bottom-video">
                                    <div className="about__one-right-bottom-video-icon video video-pulse">
                                        <span onClick={openVideoModal}><i className="fas fa-play"></i></span>
                                    </div>
                                    <span>Watch Video</span>								
                                </div>
                            </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        className="video-modal"
        channel="youtube"
        autoplay
        isOpen={openVideo}
        videoId="SZEflIVnhH8"
        onClose={() => setOpenVideo(false)}
      />
    </>
  );
};

export default About;
