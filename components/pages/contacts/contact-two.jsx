"use client";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../common/scroll/scroll-to-top";
import SwitchTab from "../common/dark-light";
import Link from "next/link";
import FormArea from "./form";

const ContactTwo = () => {
  return (
    <>
      <SEO pageTitle="Contact Us" />
      <SwitchTab />
      <HeaderOne />
      <BreadCrumb title="Contact Us" innerTitle="Contact Us" />
      <div className="contact__two section-padding">
        <div className="container">
          <div className="row al-center">
            <div className="col-xl-6 col-lg-5 lg-mb-25">
              <div className="contact__two-area mr-50 xl-mr-0">
                <span className="subtitle-one">Contact us</span>
                <h2>Do you have any question?</h2>
                <p>
                  For your car we will do everything advice, repairs and
                  maintenance. We are the some preferred choice by many car
                  owners because
                </p>
                <FormArea />
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="row">
                <div className="col-md-6 mb-25">
                  <div className="contact__one-item">
                    <i className="flaticon-telephone-call"></i>
                    <span>Phone :</span>
                    <h6>
                      <Link href="tel:+917374012228">+91 7374012228</Link>
                    </h6>
                  </div>
                </div>
                <div className="col-md-6 md-mb-25">
                  <div className="contact__one-item">
                    <i className="flaticon-mail"></i>
                    <span>Email Address :</span>
                    <Link href="mailto:beamsonicenergy@gmail.com">
                      <p>beamsonicenergy@gmail.com</p>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 md-mb-25">
                  <div className="contact__one-item">
                    <i className="flaticon-location-1"></i>
                    <span>Location :</span>
                    <h6>
                      <Link href="https://google.com/maps">
                        M 2 shree amar heights Mezzanine floor Ajmer road
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact__one-item">
                    <i className="flaticon-wall-clock"></i>
                    <span>Opening Hours :</span>
                    <h6>Mon-Fri 09 am-05 PM</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact__two-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1019.3295978025224!2d75.7416321!3d26.8912117!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db57ea4a53367%3A0x4562ffc79a244028!2sShree%20Amar%20Height!5e1!3m2!1sen!2sin!4v1749018053849!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default ContactTwo;
