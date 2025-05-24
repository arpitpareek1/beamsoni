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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.288292085279!2d75.75741997647691!3d26.83078137669606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db569ac20d473%3A0xfa2030de3b46ee59!2sAAROHI%20HOMES!5e0!3m2!1sen!2sin!4v1748122824021!5m2!1sen!2sin"
                  width="600"
                  height="450"
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
