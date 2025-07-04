"use client";
import Social from "@/components/data/social";
import Link from "next/link";
import MainMenu from "./header-menu";
import Search from "./search";
import { useState, useEffect } from "react";
import SideBar from "./offcanvas";
import logo from "../../../public/assets/img/light-logo.png";
import darkLogo from "../../../public/assets/img/dark-logo.png";
import MobileMenuPopup from "./mobile-menu/menu-area";

const HeaderOne = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuSidebar, setMenuSidebar] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <>
      <div className="topBar__one">
        <div className="custom__container">
          <div className="row al-center">
            <div className="col-lg-8">
              <div className="topBar__one-left lg-t-center">
                <ul>
                  <li>
                    <Link href="mailto:beamsonicenergy@gmail.com">
                      <i className="flaticon-envelope"></i>beamsonicenergy@gmail.com
                    </Link>
                  </li>
                  <li>
                    <Link href="https://google.com/maps">
                      <i className="flaticon-placeholder"></i>
                      M 2 shree amar heights Mezzanine floor Ajmer road
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="topBar__one-right t-right lg-t-center">
                <div className="topBar__one-right-social">
                  <h6>Follow Us</h6>
                  <Social />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__area">
        <div className="custom__container">
          <div className="header__area-menubar">
            <div className="header__area-menubar-left one">
              <div className="header__area-menubar-left-logo">
                <Link href="/">
                  <img src={logo.src} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="header__area-menubar-center">
              <div className="header__area-menubar-center-menu">
                <MainMenu />
              </div>
            </div>
            <div className="header__area-menubar-right">
              <div className="header__area-menubar-right-search">
                <div className="search">
                  <span
                    className="header__area-menubar-right-search-icon open"
                    onClick={() => setSearch(true)}
                  >
                    <i className="fal fa-search"></i>
                  </span>
                </div>
              </div>
              <div className="header__area-menubar-right-sidebar">
                <div
                  className="header__area-menubar-right-sidebar-popup-icon"
                  onClick={() => setSidebarOpen(true)}
                >
                  <i className="flaticon-menu-2"></i>
                </div>
              </div>
              <div className="header__area-menubar-right-btn">
                <Link className="btn-one" href="/request-quote">
                  Request a quote
                </Link>
              </div>
              <div className="header__area-menubar-right-responsive-menu menu__bar">
                <i
                  className="flaticon-menu-2"
                  onClick={() => setMenuSidebar(true)}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <MobileMenuPopup
        isOpen={menuSidebar}
        setIsOpen={setMenuSidebar}
        popupLogo={logo}
        addClass=""
      />
      <Search isOpen={search} setIsOpen={setSearch} />
    </>
  );
};

export default HeaderOne;
