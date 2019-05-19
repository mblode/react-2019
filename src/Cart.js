import React, { Fragment } from 'react'
import Products from './Products'
import LineItem from './LineItem'

const Cart = () => {
    let products = Products.useContainer()

    return (
        <Fragment>
            {Object.keys(products.products.cart).map(id => (
                <LineItem
                    key={id}
                    item={products.products.cart[id]}
                    removeLineItem={() => products.removeLineItem(id)}
                />
            ))}
        </Fragment>
    )
}

export default Cart

