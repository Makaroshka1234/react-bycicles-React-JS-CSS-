import React from 'react'

const MakeRide = () => {
    return (
        <>
            <section className="makeride">
                <div className="container">
                    <div className="wrapper__map">
                        <div className="map__cont">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.546649488598!2d-0.12209412353034829!3d51.503186371812305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2z0JvQvtC90LTQvtC90YHQutC40Lkg0JPQu9Cw0Lc!5e0!3m2!1sru!2sua!4v1739372876607!5m2!1sru!2sua" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="makeride__inner">

                            <form action="request" className="makeride__form">
                                <h2 className="makeride__form-title">Make your Ride!</h2>
                                <p className="makeride__form-description">This can salutandi quo nec elit utinam facer pertinax a
                                    fierent, virtute dosent.</p>
                                <div className="makeride__form-box">
                                    <input type="text" className='form__box-input name-input' placeholder='Enter your name' />
                                    <input type="text" className='form__box-input phone-input' placeholder='Enter your phone' />
                                    <input type="email" className='form__box-input mail-input' placeholder='Enter your email' />
                                    <input type="submit" value='REQUEST A CALL' className='form__box-input submit-input' />
                                </div>
                                <div className="your__data-box">
                                    <img src="/images/done-ico.svg" alt="" className='data__box-img' />
                                    <p className='data__box-text'>Your data will not be shared with third parties.</p></div>

                            </form>
                        </div>
                    </div>



                </div>
            </section>
        </>
    )
}

export default MakeRide
