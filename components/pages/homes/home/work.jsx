
import Link from "next/link";
import image1 from "../../../../public/assets/img/pages/Q1.png";
import image2 from "../../../../public/assets/img/pages/Q2.png";
import image3 from "../../../../public/assets/img/pages/Q3.png";
import image4 from "../../../../public/assets/img/pages/Q4.png";

const WorkArea = () => {
    return (
        <>
            <div className="work__process section-padding">
                <div className="container">
                    <div className="row mb-70">
                        <div className="col-xl-12">
                            <div className="work__process-title t-center">
                                <span className="subtitle-one">How It Work</span>
                                <h2>Our Work Process</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0 dark_image">
                        <div className="col-lg-3 col-sm-6 lg-mb-45">
                            <div className="work__process-item">
                                <p><span>Step 01</span></p>
                                <img src={image1.src} alt="image" />
                                <h6>Consultation</h6>
                                <p className="des">Understanding your energy needs.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 sm-mb-45">
                            <div className="work__process-item">
                                <p><span>Step 02</span></p>
                                <img src={image2.src} alt="image" />
                                <h6>Design</h6>
                                <p className="des">Crafting a customized solar plan.</p>
                            </div>					
                        </div>
                        <div className="col-lg-3 col-sm-6 sm-mb-45">
                            <div className="work__process-item">
                                <p><span>Step 03</span></p>
                                <img src={image3.src} alt="image" />
                                <h6>Installation</h6>
                                <p className="des">Professional setup by certified technicians.</p>
                            </div>					
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="work__process-item">
                                <p><span>Step 04</span></p>
                                <img src={image4.src} alt="image" />
                                <h6>Maintenance</h6>
                                <p className="des">Ongoing support to ensure optimal system performance.</p>
                            </div>						
                        </div>
                    </div>
                </div>
            </div>
        </>      
    );
};

export default WorkArea;