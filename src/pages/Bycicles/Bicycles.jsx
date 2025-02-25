import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ChooseBike from '../../components/ChooseBike/ChooseBike'
import BicyclesNav from '../../components/BicyclesNav'
import BicyclesList from '../../components/BicyclesList'
import './Bycicles.css'
import { BicyclesContext, BicyclesProvider } from '../../providers/CategoryContext'
import Pagination from '../../components/Paginate'





const Bicycles = () => {

    const { selectedCategory, setSelectedCategory, isLoading, setIsLoading, items, setItems } = React.useContext(BicyclesContext)
    const [currentPage, setCurrentPage] = React.useState(1)

    React.useEffect(() => {
        setCurrentPage(1)
    }, [selectedCategory])
    React.useEffect(() => {

        const bikeType = selectedCategory > 0 ? `type=${selectedCategory}` : '';


        fetch(`https://67ae08829e85da2f020c28f9.mockapi.io/bicycle?page=${currentPage}&limit=4&${bikeType}`)
            .then((response) => {

                return response.json()
            })
            .then((arrItems) => (

                setItems(arrItems),
                setIsLoading(false)


            ))
    }, [selectedCategory, currentPage])

    const pageCount = items.lenght / 4


    return (
        <>
            <Header />


            <div className="container">
                <div className="bicycles__inner-box">

                    <BicyclesNav />
                    <BicyclesList />
                    <Pagination onChangePage={num => setCurrentPage(num)} />

                </div>

            </div>







        </>
    )

}

export default Bicycles
