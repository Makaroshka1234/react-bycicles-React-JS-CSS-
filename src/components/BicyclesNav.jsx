import React, { useEffect } from 'react'
import { BicyclesContext } from './CategoryContext';




const navList = ['Mountain', 'Road', 'Highways', 'Cruise', 'Walking']


const BicyclesNav = () => {


    const { selectedCategory, setSelectedCategory } = React.useContext(BicyclesContext);

    console.log(selectedCategory);



    return (
        <>

            <nav className="bicycles">
                <ul className="bicycles__nav-list">
                    {navList.map((name, categoryIndex) => (
                        <li
                            key={name}
                            onClick={() => setSelectedCategory(categoryIndex)}
                            className={categoryIndex === selectedCategory ? 'bicycles__nav-item  active' : 'bicycles__nav-item'}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 0.358765C10.7461 0.358765 13.7812 3.39392 13.7812 7.14001C13.7812 10.8861 10.7461 13.9213 7 13.9213C3.25391 13.9213 0.21875 10.8861 0.21875 7.14001C0.21875 3.39392 3.25391 0.358765 7 0.358765ZM6.20703 4.29626L8.25781 6.26501H3.28125C2.89844 6.26501 2.625 6.5658 2.625 6.92126V7.35876C2.625 7.74158 2.89844 8.01501 3.28125 8.01501H8.25781L6.20703 10.0111C5.93359 10.2572 5.93359 10.6947 6.17969 10.9408L6.48047 11.2416C6.75391 11.4877 7.16406 11.4877 7.41016 11.2416L11.0469 7.60486C11.293 7.35876 11.293 6.94861 11.0469 6.70251L7.41016 3.0658C7.16406 2.79236 6.75391 2.79236 6.48047 3.0658L6.17969 3.36658C5.93359 3.61267 5.93359 4.05017 6.20703 4.29626Z" style={{ fill: categoryIndex === selectedCategory ? "#6EC1E4" : "#3B3D42" }} />
                            </svg>

                            <p className="nav__item-title">{name}</p>
                        </li>

                    ))}
                </ul>
            </nav>


        </>
    )
}

export default BicyclesNav
