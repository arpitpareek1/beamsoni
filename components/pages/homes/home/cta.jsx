import React from "react";
import Link from "next/link";
import ctaBg from "../../../../public/assets/img/shape/shape-6.png";

const CtaArea = () => {
  return (
    <div className="cta__one">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div
              className="cta__one-area"
              style={{ backgroundImage: `url(${ctaBg.src})` }}
            >
              <div className="row align-items-center">
                <div className="col-lg-7 lg-mb-25">
                  <div className="cta__one-title lg-t-center">
                    <h4>Power Your Home Today &</h4>
                    <h3>
                    Save Big!
                    </h3>
                    <p>
                        Switch to clean solar power and cut down your electricity bills instantly. Enjoy long-term savings while contributing to a greener planet.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="cta__one-contact lg-jc-center">
                    <div className="cta__one-contact-icon">
                      <i className="flaticon-mail"></i>
                    </div>
                    <div className="cta__one-contact-info">
                      <span>Free contact 24/7</span>
                      <Link href="mailto:beamsonicenergy@gmail.com">
                      <p style={{
                        color: "#fefefe"
                      }}>beamsonicenergy@gmail.com</p>
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaArea;
