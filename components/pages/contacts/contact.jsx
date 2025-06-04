"use client";
import FormArea from "./form";

const ContactUs = () => {
  return (
    <>
      <div
        className="contact__form section-padding pt-0"
        style={{
          marginTop: "5rem",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 lg-mb-25">
              <div className="contact__form-area">
                <h3>Get In touch</h3>
                <FormArea />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="contact__one-map">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
