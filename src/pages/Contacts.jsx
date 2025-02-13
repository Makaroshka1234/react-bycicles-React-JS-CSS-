import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contacts = () => {
    return (
        <div>
            <div className="wrapper">
                <Header />
                <section className="contacts__page">
                    <div className="container">
                        <div className="contacts__page-inner">
                            <ul className="contact__page-list">
                                <li className="page__list-item">
                                    <img src="/images/pink-location.svg" alt="" />
                                    <div className="page__item-text">
                                        <p className='item__text-title'>Adress:
                                        </p>
                                        <p className='item__text-description'>470 Lucy Forks, Patriciafurt</p>
                                    </div>

                                </li>
                                <li className="page__list-item">
                                    <img src="/images/pink-phone.svg" alt="" />
                                    <div className="page__item-text">
                                        <p className='item__text-title'>Phone:
                                        </p>
                                        <p>+ 1 (045) - 224 - 12 - 67;
                                        </p>
                                        <p>+ 1 (046) - 364 - 77 - 39</p>
                                    </div>
                                </li>
                                <li className="page__list-item">
                                    <img src="/images/pink-email.svg" alt="" />
                                    <div className="page__item-text">
                                        <p className='item__text-title'>Email:
                                        </p>
                                        <p>template@monster.com</p>
                                    </div>
                                </li>
                            </ul>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.546649488598!2d-0.12209412353034829!3d51.503186371812305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2z0JvQvtC90LTQvtC90YHQutC40Lkg0JPQu9Cw0Lc!5e0!3m2!1sru!2sua!4v1739372876607!5m2!1sru!2sua" width="1170" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>

        </div>
    )
}

export default Contacts
