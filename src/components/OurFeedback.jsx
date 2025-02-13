import React from 'react'

const OurFeedback = () => {
    return (
        <>
            <section className="feedback">
                <div className="container">
                    <div className="feedback__inner">


                        <div className="about_choosebike">
                            <span className='red__span'></span>
                            <h3 className="chooosebike__title">
                                Choose
                                you bike</h3>
                            <div className="feedback__buttons">
                                <button className="feedback__button-prev"><img src="/images/prev-btn.svg" alt="" /></button>
                                <button className="feedback__button-next"><img src="/images/next-btn.svg" alt="" /></button>
                            </div>
                        </div>




                        <ul className="feedback__list">
                            <li className="feedback__list-item">
                                <p className="feedback-p">
                                    I rented a bike here some time and was
                                    satisfied with service. Price is nice and quality
                                    of bikes are excellent.
                                </p>
                                <div className="feedback__bottom">
                                    <img src="/images/user-img.svg" alt="" className="feedback__img" />
                                    <div className="feedback__user">
                                        <h2 className="feedback__user-name">Adam Vorlok</h2>
                                        <p className="feedback__user-profesion">Customer</p>
                                    </div>

                                </div>
                            </li>
                            <li className="feedback__list-item">
                                <p className="feedback-p">
                                    When my friends came to me, I decided to
                                    take a stroll around the city for them. I rented
                                    some bicycles in Trialem and we were happy.
                                </p>
                                <div className="feedback__bottom">
                                    <img src="/images/user-img.svg" alt="" className="feedback__img" />
                                    <div className="feedback__user">
                                        <h2 className="feedback__user-name">Jeff Klein</h2>
                                        <p className="feedback__user-profesion">Customer</p>
                                    </div>

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurFeedback
