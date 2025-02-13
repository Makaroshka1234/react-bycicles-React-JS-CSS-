import React from 'react'

const ChooseBike = () => {
    return (
        <>
            <section className="choosebike">
                <div className="container">
                    <div className="choosebike__inner">
                        <div className="about_choosebike">
                            <span className='red__span'></span>
                            <h3 className="chooosebike__title">
                                Choose
                                you bike</h3>

                            <button className="about-btn">view more</button>


                        </div>
                        <ul className="choosebike__list">
                            <li className="choosebike__list-item">
                                <img src="/images/orange-bike.png" alt="" className="choosebike__item-img" />
                                <h2 className="bike__title">Mountain bike “Storm”</h2>
                                <p className="bike__description">Exclusive choise</p>
                                <div className="choosebike__item-bottom">
                                    <p className="price__day"><span className='price'>$ 16.00 </span> / Days</p>
                                    <button className="rent__btn"><h2>Rent</h2></button>
                                </div>

                            </li>
                            <li className="choosebike__list-item">
                                <img src="/images/blue-bike.png" alt="" className="choosebike__item-img" />
                                <h2 className="bike__title">Mountain bike “Storm”</h2>
                                <p className="bike__description">Exclusive choise</p>
                                <div className="choosebike__item-bottom">
                                    <p className="price__day"><span className='price'>$ 16.00 </span> / Days</p>
                                    <button className="rent__btn"><h2>Rent</h2></button>
                                </div>

                            </li>
                            <li className="choosebike__list-item">
                                <img src="/images/black-bike.png" alt="" className="choosebike__item-img" />
                                <h2 className="bike__title">Mountain bike “Storm”</h2>
                                <p className="bike__description">Exclusive choise</p>
                                <div className="choosebike__item-bottom">
                                    <p className="price__day"><span className='price'>$ 16.00 </span> / Days</p>
                                    <button className="rent__btn"> <h2>Rent</h2></button>
                                </div>

                            </li>
                        </ul>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ChooseBike
