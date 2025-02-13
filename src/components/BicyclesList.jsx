import React from 'react'
import { BicyclesContext } from '../providers/CategoryContext';







const BicyclesList = () => {

    const { selectedCategory } = React.useContext(BicyclesContext);

    console.log(selectedCategory);

    const [items, setItems] = React.useState([])




    React.useEffect(() => {

        const bikeType = selectedCategory > 0 ? `type=${selectedCategory}` : '';


        fetch(`https://67ae08829e85da2f020c28f9.mockapi.io/bicycle?${bikeType}`)
            .then((response) => {
                return response.json()
            })
            .then((arrItems) => (
                setItems(arrItems)



            ))
    }, [selectedCategory])



    return (


        <>
            {console.log(items)}
            <ul className="bicycles__list">
                {
                    Array.isArray(items) && items.map((item, index) => (
                        <li className="bicycles__list-item">
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
