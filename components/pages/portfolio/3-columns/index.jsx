"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ThreeColumns from "./three-columns";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import SwitchTab from "../../common/dark-light";

const PortfolioThreeColumns = () => {
    return (
        <>
            <SEO pageTitle='Our Work' />
            <SwitchTab />
            <HeaderOne />
            <BreadCrumb title="Our Work" innerTitle="our work" />
            <ThreeColumns />        
            <FooterOne />          
            <ScrollToTop />
        </>
    );
};

export default PortfolioThreeColumns;