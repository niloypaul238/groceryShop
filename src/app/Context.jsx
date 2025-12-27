"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';

export const MycreateCon = createContext()


const Context = ({ children }) => {

    const [prooducts, setProoducts] = useState([])
    const [catagory,setCatagory] = useState([])
    const [carts,setCharts] = useState([])
    const [buy,setBuy] = useState([])
    
    useEffect(() => {
        fetch('products.json').then(res => res.json()).then(products => setProoducts(products))
    }, [])


    useEffect(() => {
        fetch('catagory.json').then(res => res.json()).then(products => setCatagory(products))
    }, [])
    return (
        <MycreateCon.Provider value={[prooducts,setProoducts ,catagory,setCatagory,carts,setCharts,buy,setBuy]}>
            {children}
        </MycreateCon.Provider>
    );
};

export default Context;