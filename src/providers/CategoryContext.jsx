import { createContext, useState } from "react";

export const BicyclesContext = createContext();

export const BicyclesProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([])

    return (
        <BicyclesContext.Provider value={{ selectedCategory, setSelectedCategory, isLoading, setIsLoading, items, setItems }}>
            {children}
        </BicyclesContext.Provider>
    );
};