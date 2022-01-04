import React, { useContext } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { CartContaxt } from '../Global/CartContaxt'

function Cart() {
    const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContaxt)
    const handleToken = (token) => {
        console.log(token);
    }

    return (
        <div className="container">
            <div className="cart-container">
                <div className="cart-detail">
                    {shoppingCart.length > 0 ?
                        shoppingCart.map((product) => (
                            <div className="cart" key={product.id}>
                                <span className="cart-product-img">
                                    <img src={product.image} alt="" />
                                </span>
                                <span>
                                    <span className="product-name">
                                        {product.name}
                                    </span>
                                    <span className="product-price">
                                        ${product.price}.00
                                    </span>
                                    <span className="cart-increment"
                                        onClick={() => dispatch({ type: 'INCREMENT', id: product.id, product })}
                                    ><i className="fas fa-plus"></i></span>
                                    <span className="cart-qty">{product.qty}</span>
                                    <span className="cart-decrement"
                                        onClick={() => dispatch({ type: 'DECREMENT', id: product.id, product })}
                                    ><i className="fas fa-minus"
                                    ></i></span>
                                    <span className="cart-total">${product.qty * product.price}.00</span>
                                    <span className="cart-delete"
                                        onClick={() => dispatch({ type: 'DELETE', id: product.id, product })}
                                    ><i className="fas fa-trash-alt"></i></span>
                                </span>
                            </div>
                        ))
                        : <h1>Your cart is empty</h1>
                    }
                </div>
                {shoppingCart.length > 0 ?
                    < div className='cart-summary'>
                        <div className='sumamry'>
                            <h2 className='sumamry-heading'>Cart Summary</h2>
                            <div className='summary-product'>
                                <div className='sumamry-total-bill-name'>Total product's</div>
                                <div className='summary-total-product'>{qty}</div>
                            </div>
                            <div className='summary-total'>
                                <div>Total bill</div>
                                <div className=' summary-total-price'>${totalPrice}.00</div>
                            </div>
                        </div>
                        <div className='payment-button'>
                            <StripeCheckout
                                stripeKey="pk_test_51JtvONIjySzjmizFXpjO0TF46GTBU7LhfR7ZDIlFkVeacfDmUAbZranG7EISlvn0E6XfI4dkulXjm7kNmN1SiRvU008FJrrXeV"
                                token={handleToken}
                                name="My products"
                                billingAddress
                                shippingAddress
                                amount={totalPrice * 100}

                            >

                            </StripeCheckout>
                        </div>
                    </div>
                    : ''}

            </div>

        </div >
    )
}

export default Cart
