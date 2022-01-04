import React, { createContext, useReducer } from 'react'
import { CartReducer } from './CartReducer'

export const CartContaxt = createContext()

const CartContaxtProvider = (props) => {
    const [cart, dispatch] = useReducer(CartReducer, { shoppingCart: [], totalPrice: 0, qty: 0 })
    
    return (
        <CartContaxt.Provider value={{...cart, dispatch }}>
            {props.children}
        </CartContaxt.Provider>
    )
}

export default CartContaxtProvider;
