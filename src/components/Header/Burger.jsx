import React from 'react'
import { MenuContext } from '../../providers/MenuProvider'

const Burger = () => {
    const { isOpen, setIsOpen } = React.useContext(MenuContext)
    console.log(isOpen);



    return (
        <div className='menu' onClick={() => setIsOpen(!isOpen)}>


            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Burger
