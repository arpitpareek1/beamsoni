import React from 'react';

const FormArea = () => {
    return (
        <>
            <form onSubmit={(e)=>{
                e.preventDefault();
                console.log("Submitted");
                // send user to gmail and also send the data for gamil for auto fill
                const formData = new FormData(e.currentTarget);
                const name = formData.get("name");
                const email = formData.get("email");
                const subject = formData.get("subject");
                const message = formData.get("message");
                console.log(name, email, subject, message);
                // send user to gmail and also send the data for gamil for auto fill
                const mailtoLink = `mailto:i?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;
                window.location.href = mailtoLink;
            }}>
                <div className="row">
                    <div className="col-md-6 mb-30">
                        <div className="contact__form-area-item">
                            <input type="text" name="name" placeholder="Full Name" required="required" />
                        </div>
                    </div>
                    <div className="col-md-6 md-mb-30">
                        <div className="contact__form-area-item">
                            <input type="email" name="email" placeholder="Email Address" required="required" />
                        </div>
                    </div>
                    <div className="col-md-12 mb-30">
                        <div className="contact__form-area-item">
                            <input type="text" name="subject" placeholder="Subject" />
                        </div>
                    </div>
                    <div className="col-md-12 mb-30">
                        <div className="contact__form-area-item">
                            <textarea name="message" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="contact__two-right-form-item">
                            <button className="btn-one" type="submit">Submit Now</button>
                        </div>
                    </div>
                </div>
            </form>            
        </>
    );
};

export default FormArea;