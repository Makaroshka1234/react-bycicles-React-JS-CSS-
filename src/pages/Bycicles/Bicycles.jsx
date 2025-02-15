import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ChooseBike from '../../components/ChooseBike/ChooseBike'
import BicyclesNav from '../../components/BicyclesNav'
import BicyclesList from '../../components/BicyclesList'
import './Bycicles.css'
import { BicyclesProvider } from '../../providers/CategoryContext'





const Bicycles = () => {


    const [activeCategory, setActiveCategory] = React.useState(0)


    return (
        <>


            <Header />
            <div className="container">
                <div className="bicycles__inner-box">
                    <BicyclesProvider>
                        <BicyclesNav />
                        <BicyclesList />
                    </BicyclesProvider>
                </div>

            </div>






        </>
    )

}

export default Bicycles
