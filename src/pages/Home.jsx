import React from "react";
import Header from "../components/Header";

import HeaderHello from "../components/HeaderHello";
import AboutSection from "../components/AboutSection";
import CostSection from "../components/CostSection";
import ChooseBike from "../components/ChooseBike";
import Trialem from "../components/Trialem";
import OurFeedback from "../components/OurFeedback";
import MakeRide from "../components/MakeRide";
import Footer from "../components/Footer";


export const Home = () => {
    return (
        <>
            <div className="wrapper">


                <div className="wrap">
                    <Header />
                    <HeaderHello />
                </div>

                <AboutSection />
                <CostSection />
                <ChooseBike />
                <Trialem />
                <OurFeedback />
                <MakeRide />

                <Footer />
            </div>
        </>

    )
}

export default Home

