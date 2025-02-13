import React from 'react'

const AboutSection = () => {
    return (
        <>
            <section className="about">
                <div className="container">
                    <div className="about__inner">
                        <img src="/images/home-bike.png" alt="" className="about__img" />
                        <div className="about__rent">
                            <span className='red__span'></span>
                            <h3 className="about__title">
                                about
                                our
                                company</h3>
                            <p className="about__discount">We are cycling enthusiasts, fall in love with our city, and tour guides obsessed with showing it.</p>
                            <div className="about__buttons">
                                <button className="about-btn">about us</button>
                                <button className="subscribe-btn">subscribe</button>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

        </>
    )
}

export default AboutSection
