import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ChooseBike from '../../components/ChooseBike'
import BicyclesNav from '../../components/BicyclesNav'
import BicyclesList from '../../components/BicyclesList'
import './Bycicles.css'
import { BicyclesProvider } from '../../components/CategoryContext'





const Bicycles = () => {


    const [activeCategory, setActiveCategory] = React.useState(0)


    return (
        <>

            <div className="wrapper">
                <Header />
                <div className="container">
                    <div className="bicycles__inner-box">
                        <BicyclesProvider>
                            <BicyclesNav />
                            <BicyclesList />
                        </BicyclesProvider>
                    </div>

                </div>


                <Footer />
            </div>


        </>
    )

}

export default Bicycles
