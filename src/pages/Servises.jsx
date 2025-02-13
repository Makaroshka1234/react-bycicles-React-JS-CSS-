import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import CostSection from '../components/CostSection/CostSection'
import OurFeedback from '../components/OurFeedBack/OurFeedback'
import Trialem from '../components/Trialem/Trialem'

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
