
import React, { createContext, useState, useEffect } from 'react';
import all_product from "../componenets/Assets/all_product"; // Assuming all_product.js is a JS file

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Simulating fetching the products or using the provided all_product
        setProducts(all_product);
    }, []);

    return (
        <ShopContext.Provider value={products}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
