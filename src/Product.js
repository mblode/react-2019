import React from 'react'

let Product = (props) => {
    const { name, price, incrementPrice, decrementPrice, addToCart} = props

    return (
        <div>
            <h3>{name}</h3>
            <button onClick={decrementPrice}>-</button>
            {price}
            <button onClick={incrementPrice}>+</button>
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default Product
