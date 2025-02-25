import React, { useEffect } from 'react'
import { MenuContext } from '../../providers/MenuProvider'

const Burger = () => {
    const { isOpen, setIsOpen } = React.useContext(MenuContext)


    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        // Чистимо клас при розмонтуванні компонента
        return () => {
            document.body.classList.remove('no-scroll');
        };

    }, [isOpen]);

    return (
        <div className={`menu ${isOpen ? 'active' : ''} `} onClick={() => setIsOpen(!isOpen)}>


            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Burger
