import Link from "next/link";
import React from "react";
import image from "../../../../public/assets/img/pages/11.png";

const ChooseUs = () => {
  return (
    <>
      <div className="choose__us section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="choose__us-area">
                <div className="choose__us-area-title">
                  <span className="subtitle-one">Why Choose US</span>
                  <h2>Leading the Way in Renewable Energy</h2>
                  <p>
                    Beamsonic Energy stands at the forefront of India's solar
                    industry. Our innovative approaches and commitment to
                    quality make us the preferred choice for sustainable energy
                    solutions.
                  </p>
                </div>
                <div className="choose__us-area-list">
                  <div className="choose__us-area-list-item">
                    <i className="flaticon-deal"></i>
                    <div className="choose__us-area-list-item-bottom">
                      <h6>Reliable Partner</h6>
                    </div>
                  </div>
                  <div className="choose__us-area-list-item">
                    <i className="flaticon-talk"></i>
                    <div className="choose__us-area-list-item-bottom">
                      <h6>Honors Commitment</h6>
                    </div>
                  </div>
                  <div className="choose__us-area-list-item">
                    <i className="flaticon-global-shipping"></i>
                    <div className="choose__us-area-list-item-bottom">
                      <h6>Worldwide Expertise</h6>
                    </div>
                  </div>
                </div>
                <div className="choose__us-area-bottom">
                  {/* <Link className="btn-one" href="/about-us">Own Tomorrow</Link> */}
                  <div className="choose__us-area-bottom-btn">
                    {/* <Link className="btn-one" href="/about-us">Own Tomorrow</Link> */}
                  </div>
                  <div className="choose__us-area-bottom-tel sm-mt-25">
                    <h6>
                      If your have any Questions
                      <br />
                      Feel free to contact{" "}
                      <Link href="tel:+919468837019"> +91 94688 37019</Link>
                    </h6>
                  </div>
                </div>
                <div className="choose__us-area-image dark_image">
                  <img src={image.src} alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
