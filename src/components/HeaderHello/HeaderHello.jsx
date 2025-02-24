import React from 'react'
import './headerhello.css'
const HeaderHello = () => {
    return (
        <>
            <section className="header__hello">
                <div className="container">
                    <div className="hello__inner">
                        <span className='red__span'></span>
                        <h3 className="hello__title">Rent
                            a bike
                            cheaply</h3>
                        <p className="hello__discount">Book a bike for hire at a low price and get the next
                            rental with a <span className='discount-span'>25% discount!</span></p>
                        <button className="hello__btn">rental bike</button>
                    </div>

                </div>

            </section>
        </>
    )
}

export default HeaderHello
