import React, { useState, createContext } from 'react';
import bag from '../images/bag.jpg';
import dslr from '../images/dslr.jpg';
import glasses from '../images/glasses.jpg';
import iPhone from '../images/iPhone.jpg';
import laptop from '../images/laptop.jpg';
import perfume from '../images/perfume.jpg';
import shoes from '../images/shoes.jpg';
import watch from '../images/watch.jpg';

export const ProductsContaxt = createContext()


function ProductsContaxtProvider(props) {
    const [products] = useState([
        { id: 1, name: 'Bag', price: 50, image: bag, status: 'hot' },
        { id: 2, name: 'Dslr', price: 100, image: dslr, status: 'hot' },
        { id: 3, name: 'Glasses', price: 20, image: glasses, status: 'new' },
        { id: 4, name: 'IPhone', price: 500, image: iPhone, status: 'hot' },
        { id: 5, name: 'Laptop', price: 1000, image: laptop, status: 'hot' },
        { id: 6, name: 'Perfume', price: 30, image: perfume, status: 'hot' },
        { id: 7, name: 'Shoes', price: 25, image: shoes, status: 'new' },
        { id: 8, name: 'watch', price: 70, image: watch, status: 'hot' },
    ])
    return (
       <ProductsContaxt.Provider value={{products:[...products]}}>
           {props.children}
       </ProductsContaxt.Provider>
       


    )
}

export default ProductsContaxtProvider
