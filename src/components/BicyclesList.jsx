import React from 'react'
import { BicyclesContext } from '../providers/CategoryContext';
import MyLoader from '../BycicleSkelet/Bycicle';



const BicyclesList = () => {

    const { selectedCategory, isLoading, setIsLoading, items } = React.useContext(BicyclesContext);

    return (


        <>
            {console.log(items)}
            <ul className="bicycles__list">
                {
                    isLoading ? [...Array(4)].map((_, index) => (
                        <li key={index} className="bicycles__list-item">
                            <MyLoader />
                        </li>
                    )) : items.map((item, index) => (


                        <li key={index} className="bicycles__list-item">
                            <img src={item.img} alt="" className="bicycles__item-img" />
                            <h2 className="bike__title">{item.title}</h2>
                            <p className="bike__description">Exclusive choise</p>
                            <div className="choosebike__item-bottom">
                                <p className="price__day"><span className='bicycle__price'>$ {item.price} </span> / Days</p>
                                <button className="rent__btn"><h2>Rent</h2></button>
                            </div>
                        </li>
                    ))
                }



            </ul >

        </>
    )
}

export default BicyclesList
