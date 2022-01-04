import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { CartContaxt } from '../Global/CartContaxt'


function Nabvbar() {
    const { qty } = useContext(CartContaxt)

    return (
     
            <nav>
                <ul className="left">
                    <li>
                        <Link to="/">PakExpress</Link>
                    </li>
                </ul>
                <ul className="right">
                    <li >
                        <Link to="/cart">
                            <span className="shopingCart"><i className="fas fa-cart-plus" ></i>
                                <span className="cartCount"> {qty}</span></span>
                        </Link>
                    </li>
                </ul>
            </nav>
       
    )
}

export default Nabvbar
