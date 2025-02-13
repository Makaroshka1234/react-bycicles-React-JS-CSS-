import React from 'react'
import Header from '../components/Header'
import AboutSection from '../components/AboutSection'
import ChooseBike from '../components/ChooseBike'
import Footer from '../components/Footer'
import MakeRide from '../components/MakeRide'

const About = () => {
    return (
        <>
            <div className="wrapper">
                <Header />

                <AboutSection />
                <ChooseBike />


                <MakeRide />
                <Footer />
            </div>

        </>
    )
}

export default About
