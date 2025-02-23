import React from 'react'
import { Link } from 'react-router'
import { MenuContext } from '../../providers/MenuProvider'

const NavList = () => {

    const { isOpen } = React.useContext(MenuContext)

    return (
        <nav className={`header__bottom-list ${isOpen ? 'active' : ''}`}>
            <li className="bottom__list-item">
                <Link Link to="/" className="bottom__list-link">HOME</Link>
            </li>
            <li className="bottom__list-item">
                <Link Link to="/about" className="bottom__list-link">ABOUT</Link>
            </li>
            <li className="bottom__list-item">
                <Link to="/bicycles" className="bottom__list-link">BICYCLES</Link></li>
            <li className="bottom__list-item">
                <Link Link to="/servises" className="bottom__list-link">SERVICES</Link>
            </li>
            <li className="bottom__list-item">
                <Link to="/contacts" className="bottom__list-link">CONTACTS</Link>
            </li>
        </nav>
    )
}

export default NavList
