"use client";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import About from "./about";
import Services from "./services";
import CtaArea from "./cta";
import Portfolio from "./portfolio";
import Testimonial from "./testimonial";
import WorkArea from "./work";
import Blog from "./blog";
import FooterOne from "@/components/layout/footers/footer-one";
import BannerOne from "./banner";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import SwitchTab from "../../common/dark-light";
import Features from "./features";
import ChooseUs from "./choose-us";
import Team from "./team";
import bgImage from "../../../../public/assets/img/shape/shape-9.png";
import ContactUs from "../../contacts/contact";

const HomeOne = () => {
  return (
    <div>
      <SEO pageTitle="Solar Energy" />
      <HeaderOne />
      <SwitchTab />
      <BannerOne />
      <Features />
      <About />
      <Services />
      <CtaArea />
      <ChooseUs />
      <Portfolio />
      <WorkArea />
      <Team />
      <div
        className="testimonial__one section-padding"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <Testimonial />
      </div>
      {/* <Blog /> */}
      <ContactUs/>
      {/* <div className="col-lg-6 col-12">
        <div className="srex-contact__right mt-5">
          <div className="srex-section__head">
            <h5
              className="srex-section__head__badge wow ud-fade-in-up"
              data-wow-delay="200ms"
            >
              <img src="./assets/images/badge-icon.svg" alt="Badge Icon" />
              Contact US
            </h5>
            <h2
              className="srex-section__head__title wow ud-fade-in-up"
              data-wow-delay="200ms"
            >
              Empowering Communities with Solar Energy
            </h2>
            <p className="mt-2 mb-4 wow ud-fade-in-up" data-wow-duration="2.2s">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout It is a
              long established fact that a
            </p>

            <div className="srex-icon-list">
              <ul>
                <li className="wow ud-fade-in-up" data-wow-delay="200ms">
                  <i className="fa-solid fa-phone"></i>
                  <h4>
                    <a href="tel:+6295550129">(629) 555-0129</a>
                  </h4>
                </li>
                <li className="wow ud-fade-in-up" data-wow-delay="200ms">
                  <i className="fa-solid fa-envelope"></i>
                  <h4>
                    <a href="mailto:info@example.com">info@example.com</a>
                  </h4>
                </li>
                <li className="wow ud-fade-in-up" data-wow-delay="200ms">
                  <i className="fa-solid fa-location-dot"></i>
                  <h4>6391 Elgin St. Celina, 10299</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
      <FooterOne />
      <ScrollToTop />
    </div>
  );
};

export default HomeOne;
