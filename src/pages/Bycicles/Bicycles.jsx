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
                    <BicyclesProvider>
                        <BicyclesNav />
                        <BicyclesList />
                    </BicyclesProvider>
                </div>


                <Footer />
            </div>


        </>
    )

}

export default Bicycles
