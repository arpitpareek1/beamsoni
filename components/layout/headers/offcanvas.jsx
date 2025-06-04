import Link from 'next/link';
import logo2 from "../../../public/assets/img/dark-logo.png";
import logo3 from "../../../public/assets/img/dark-logo.png";
import logo4 from "../../../public/assets/img/logo-5.png";
import Social from '@/components/data/social';

const SideBar = ({ isOpen, setIsOpen, addClass }) => {
    return (
        <>
            <div className={`header__area-menubar-right-sidebar-popup ${addClass} ${isOpen ? 'active' : ''}`}>
                <div className="sidebar-close-btn" onClick={() => setIsOpen(false)}><i className="fal fa-times"></i></div>
				<div className="header__area-menubar-right-sidebar-popup-logo">
				<Link href='/'>
					<img className='logo_one' src={logo2.src} alt="logo" />
					<img className='logo_two' src={logo3.src} alt="logo" />
					<img className='logo_three' src={logo4.src} alt="logo" />
				</Link>
				</div>
				<p>Beamsonic Energy Private Limited is a Jaipur-based leader in delivering innovative and reliable solar solutions for residential and commercial projects, committed to powering a sustainable future with clean, affordable solar energy.</p>
				<div className="header__area-menubar-right-sidebar-popup-contact">
					<h4 className="mb-30">Get In Touch</h4>
					<div className="header__area-menubar-right-sidebar-popup-contact-item">
						<div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
							<i className="fal fa-phone-alt icon-animation"></i>
						</div>
						<div className="header__area-menubar-right-sidebar-popup-contact-item-content">
							<span>Call Now</span>
							<h6><Link href="tel:+917374012228">+91 7374012228</Link></h6>
						</div>
					</div>
					<div className="header__area-menubar-right-sidebar-popup-contact-item">
						<div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
							<i className="fal fa-envelope"></i>
						</div>
						<div className="header__area-menubar-right-sidebar-popup-contact-item-content">
							<span>Quick Email</span>
							<h6><Link href="mailto:hello@beamsonic.com">hello@beamsonic.com</Link></h6>
						</div>
					</div>
					<div className="header__area-menubar-right-sidebar-popup-contact-item">
						<div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
							<i className="fal fa-map-marker-alt"></i>
						</div>
						<div className="header__area-menubar-right-sidebar-popup-contact-item-content">
							<span>Office Address</span>
							<h6><Link href="https://google.com/maps" target="_blank">M 2 shree amar heights Mezzanine floor Ajmer road</Link></h6>
						</div>
					</div>
				</div>
				<div className="header__area-menubar-right-sidebar-popup-social social__icon">
					<Social />
				</div>
			</div>
            <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`}></div>
        </>
    );
};

export default SideBar;