import React from 'react'
import './trialem.css'


const Trialem = () => {
    return (
        <>
            <section className="trialem">
                <div className="container">
                    <div className="trialem__inner">
                        {/* <img src="/images/black-bike-bg.png" alt="" className="trialem__bike-img" /> */}
                        <div className="trialem__text">
                            <div className="about__trialem">
                                <span className='red__span'></span>
                                <h3 className="trialem__title">
                                    why
                                    Trialem</h3>
                            </div>
                            <div className="trialem-grid-container">
                                <div className="trialem-grid-item">
                                    <img src="/images/procent-ico.svg" alt="" className="pricing__ico" />
                                    <p className='cost__data-title'>Low prices</p>
                                    <p className='pricing__box-desciption'>We provide affordable prices for
                                        renting bikes</p>
                                </div>
                                <div className="trialem]-grid-item">
                                    <img src="/images/bike-ico.svg" alt="" className="pricing__ico" />
                                    <p className='cost__data-title'>New bicycles</p>
                                    <p className='pricing__box-desciption'>We lease new bicycles for your
                                        comfort.</p>
                                </div>
                                <div className="trialem-grid-item">
                                    <img src="/images/comment-ico.svg" alt="" className="pricing__ico" />
                                    <p className='cost__data-title'>Convenient location</p>
                                    <p className='pricing__box-desciption'>Pick up and return bicycle at our
                                        spot easily.</p>
                                </div>
                                <div className="trialem-grid-item">
                                    <img src="/images/location-why-ico.svg" alt="" className="pricing__ico" />
                                    <p className='cost__data-title'>Convenient location</p>
                                    <p className='pricing__box-desciption'>Our maain station is located in
                                        the center of the city.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Trialem
