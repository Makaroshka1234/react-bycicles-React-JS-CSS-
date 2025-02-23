
import React from 'react'
import './Header.css'
import { NavLink, Link, useLocation } from "react-router";
import HeaderHello from '../HeaderHello/HeaderHello';
import Burger from './Burger';
import NavList from './NavList';


import { MenuProvider } from '../../providers/MenuProvider'




export const Header = () => {




    const location = useLocation();

    const pageClass = location.pathname === "/"
        ? "header"
        : "header " + location.pathname.replace("/", "") + "__header";

    return (
        <>

            <header className={`header ${pageClass}`}>
                <div className="container">
                    <div className="header__top">
                        <ul className="header__info-list">
                            <li className="info__list-item">
                                <img src="/images/location-ico.svg" alt="" className="info__item-img" />
                                <a href="" className='info__item-link'>221 Beker St, Los Angeles, USA</a>
                            </li>
                            <li className="info__list-item">
                                <img src="/images/phone-ico.svg" alt="" className="info__item-img" />
                                <a href="" className='info__item-link'>800 1238 45 46</a>
                            </li>
                        </ul>
                        <ul className="header__social-list">
                            <li className="social__list-item">
                                <img src="/images/facebook.svg" alt="facebook" href="#" />
                            </li>
                            <li className="social__list-item">
                                <img src="/images/twitter.svg" alt="twitter" href="#" />
                            </li>
                            <li className="social__list-item">
                                <img src="/images/instagram.svg" alt="instagram" href="#" />
                            </li>
                            <li className="social__list-item">
                                <img src="/images/youtube.svg" alt="youtube" href="#" />
                            </li>
                        </ul>
                    </div>
                    <div className="header__bottom">
                        <Link link to='/'><img src="/images/logo.svg" alt="" className="header__logo" /></Link>

                        <MenuProvider>

                            <NavList />
                            <Burger />
                        </MenuProvider>
                    </div>
                </div>

            </header >

        </>
    )
}


export default Header