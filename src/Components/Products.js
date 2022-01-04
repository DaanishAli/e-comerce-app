import React, { useContext } from 'react';
import { ProductsContaxt } from '../Global/ProductsContaxtProvider'
import Banner from '../Components/Banner';
import { CartContaxt } from '../Global/CartContaxt'

function Products() {
    const { products } = useContext(ProductsContaxt)
    const { dispatch } = useContext(CartContaxt)


    return (
        <div>
            <Banner />
            <div className="container">
                <div className='products'>
                    {products.map((product) => (
                        <div className='product' key={product.id}>
                            <div className='product-img'>
                                <img src={product.image} alt="not found" />
                            </div>
                            <div className="product-details">
                                <div className="product-name">
                                    {product.name}
                                </div>
                                <div className="product-price">
                                    ${product.price}.00
                                </div>
                                <div className="add-to-cart" onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.id, product })}>
                                    ADD TO CART
                                </div>
                                {product.status === 'hot' ? <div className='hot'>Hot</div> : ""}
                                {product.status === 'new' ? <div className='new'>New</div> : ""}
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </div>
    )
}

export default Products
