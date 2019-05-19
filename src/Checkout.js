import React, { useState } from 'react'

const Checkout = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Checkout Now
            </button>
        </div>
    )
}

export default Checkout
