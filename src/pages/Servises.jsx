import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CostSection from '../components/CostSection'
import OurFeedback from '../components/OurFeedback'
import Trialem from '../components/Trialem'

const Servises = () => {
    return (
        <div>
            <div className="wrapper">
                <Header />

                <CostSection />
                <Trialem />
                <OurFeedback />
                <Footer />
            </div>

        </div>
    )
}

export default Servises
