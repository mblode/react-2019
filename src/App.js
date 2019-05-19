import React from 'react';
import Products from './Products'
import ProductList from './ProductList'
import Checkout from './Checkout'
import Cart from './Cart'

let App = () => {
    const state = {
        cart: {},
        products: {
            car001: {
                name: 'Honda',
                price: 100,
                type: 'cars'
            },
            car002: {
                name: 'BMW',
                price: 150,
                type: 'cars'
            },
            car003: {
                name: 'Mercedes',
                price: 200,
                type: 'cars'
            },
            electronics001: {
                name: 'iPhone',
                price: 100,
                type: 'electronics'
            },
            electronics002: {
                name: 'Pixel 3A',
                price: 150,
                type: 'electronics'
            },
            electronics003: {
                name: 'Galaxy S10E',
                price: 200,
                type: 'electronics'
            }
        }
    };

    return (
        <Products.Provider initialState={state}>
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to my web store</h1>
                    <Checkout />
                    <Cart />
                </header>
                <ProductList />
            </div>
        </Products.Provider>
    );
}

export default App;
