import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer__inner">
                        <ul className="footer__list">
                            <li className="footer__list-item">
                                <img className='footer-logo' src="/images/logo.svg" alt="" />
                                <p className="footer__item-p">At nemore iriure luptatum nam, at iudico
                                    albucius console pericula this is partiendo
                                    constituam at per.</p>
                                <ul className="footer__social-list">
                                    <li className="foterr__social-item">
                                        <img src="/images/facebook.svg" alt="" />
                                    </li>
                                    <li className="foterr__social-item">
                                        <img src="/images/instagram.svg" alt="" />
                                    </li>
                                    <li className="foterr__social-item">
                                        <img src="/images/twitter.svg" alt="" />
                                    </li>
                                    <li className="foterr__social-item">
                                        <img src="/images/youtube.svg" alt="" />
                                    </li>
                                </ul>
                            </li>
                            <li className="footer__list-item">
                                <p className="footer__title">Instagram</p>
                            </li>
                            <li className="footer__list-item">
                                <p className="footer__title">Contact us</p>
                                <ul className="footer__contact-list">
                                    <li className="contact__list-item">
                                        <p className="contact__item-title">Phone:</p>
                                        <a href="" className="contact__item-link"><p>+ 1 (045) – 224 – 12 – 67</p></a>
                                    </li>
                                    <li className="contact__list-item">
                                        <p className="contact__item-title">Adress:</p>
                                        <a href="" className="contact__item-link"><p>470 Lucy Forks,Patriciafurt, YC7B 3UT</p></a>
                                    </li>
                                    <li className="contact__list-item">
                                        <p className="contact__item-title">Email:</p>
                                        <a href="" className="contact__item-link"><p>template@monster.com</p></a>
                                    </li>
                                </ul>
                            </li>
                            <li className="footer__list-item">
                                <p className="footer__title">Subscribe</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
