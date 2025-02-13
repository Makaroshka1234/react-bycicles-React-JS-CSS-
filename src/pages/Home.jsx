import React from "react";
import Header from "../components/Header/Header";

import HeaderHello from "../components/HeaderHello/HeaderHello";
import AboutSection from "../components/AboutSection/AboutSection";
import CostSection from "../components/CostSection/CostSection";
import ChooseBike from "../components/ChooseBike/ChooseBike";
import Trialem from "../components/Trialem/Trialem";
import OurFeedback from "../components/OurFeedBack/OurFeedback";
import MakeRide from "../MakeRide/MakeRide";
import Footer from "../components/Footer/Footer";


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

