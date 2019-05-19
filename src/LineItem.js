import React from 'react'

const LineItem = props => {
    const {name, price, type} = props.item
    return (
        <div>
            <h3>{name}</h3>
            <p>{price} &middot; {type}</p>
            <button onClick={props.removeLineItem}>Remove</button>
        </div>
    )
}

export default LineItem
