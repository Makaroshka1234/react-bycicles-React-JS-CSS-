import React from 'react'
import './costSection.css'


const CostSection = () => {
    return (
        <>
            <section className='cost'>
                <div className="container">
                    <div className="cost__inner">
                        <div className="about__cost">
                            <span className='red__span'></span>
                            <h3 className="cost__title">
                                cost
                                of Trialem</h3>
                            <p className="cost__discount">Usu nobis virtute eu summo sanctus te, tempor mei at fugit <br />
                                senserit <span className='discount-span'>suscipiantur</span>, per erat epicuri.</p>

                            <button className="about-btn">rental bike</button>
                        </div>
                        <div class="pricing-container">
                            <div class="pricing-box">
                                <img src="/images/clock.svg" alt="" className="pricing__ico" />
                                <h2 className='cost__data-title'>4 Hours <span class="price">($12)</span></h2>
                                <p className='pricing__box-desciption'>You can rent a bike for 4 hours and enjoy your riding around the city.</p>
                            </div>
                            <div class="pricing-box">
                                <img src="/images/history.svg" alt="" className="pricing__ico" />
                                <h2 className='cost__data-title'>1 Day <span class="price">($20)</span></h2>
                                <p className='pricing__box-desciption'>Enjoy a full day ride and explore the city.</p>
                            </div>
                            <div class="pricing-box">
                                <img src="/images/time.svg" alt="" className="pricing__ico" />
                                <h2 className='cost__data-title'>1 Week <span class="price">($78)</span></h2>
                                <p className='pricing__box-desciption'>There is an option to rent a bike for 1 week and learn the city.</p>
                            </div>
                            <div class="pricing-box">
                                <img src="/images/calendar.svg" alt="" className="pricing__ico" />
                                <h2 className='cost__data-title'>1 Month <span class="price">($299)</span></h2>
                                <p className='pricing__box-desciption'>We provide an opportunity to rent a bike for 1 month.</p>
                            </div>
                        </div>




                    </div>
                </div>
            </section>
        </>
    )
}

export default CostSection
