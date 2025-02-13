import { createContext, useState } from "react";

export const BicyclesContext = createContext();

export const BicyclesProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState(0);

    return (
        <BicyclesContext.Provider value={{ selectedCategory, setSelectedCategory }}>
            {children}
        </BicyclesContext.Provider>
    );
};