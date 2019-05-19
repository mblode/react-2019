import { useState } from 'react';
import { createContainer } from "unstated-next"

let useProducts = (initialState = 0) => {
    let [products, setProducts] = useState(initialState)

    let incrementPrice = (id) => {
        const newProducts = Object.assign({}, products);
        newProducts.products[id].price = newProducts.products[id].price + 1;
        setProducts(newProducts);
    }

    let decrementPrice = (id) => {
        const newProducts = Object.assign({}, products);
        newProducts.products[id].price = newProducts.products[id].price - 1;
        setProducts(newProducts);
    }

    let addToCart = (id) => {
        const newCart = Object.assign({}, products);
        let item = products.products[id];
        item['qty'] = 1;
        newCart.cart[id] = item;
        setProducts(newCart);
    }

    let removeLineItem = (id) => {
        const newCart = Object.assign({}, products);
        delete newCart.cart[id];
        setProducts(newCart);
    }

    return { products, incrementPrice, decrementPrice, addToCart, removeLineItem }
}

const Products = createContainer(useProducts);

export default Products;
