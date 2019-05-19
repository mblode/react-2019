import React, { Fragment } from 'react'
import Products from './Products'
import Product from './Product'

const ProductsDisplay = (props) => {
    let products = Products.useContainer()

    return (
        <Fragment>
            <h4>Products:</h4>
            {Object.keys(products.products.products).map(id => (
                <Product
                    key={id}
                    name={products.products.products[id].name}
                    price={products.products.products[id].price}
                    incrementPrice={() => products.incrementPrice(id)}
                    decrementPrice={() => products.decrementPrice(id)}
                    addToCart={() => products.addToCart(id)}
                />
            ))}
        </Fragment>
    )
};

export default ProductsDisplay
