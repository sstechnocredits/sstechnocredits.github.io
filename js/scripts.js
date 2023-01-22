/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Initialize the cart array and the cart count
let cart = [];
let cartCount = 0;

// Function to add an item to the cart
function addToCart(item) {
    cart.push(item);
    cartCount++;
    updateCartCount();
}

// Function to update the cart count displayed on the page
function updateCartCount() {
    let cartCountElement = document.getElementById("cart-count");
    cartCountElement.innerHTML = cartCount;
}

// Example usage
addToCart({id: Lin12, name: "item1", price: 10});
addToCart({id: 2, name: "item2", price: 20});
console.log(cart);  // [{id: 1, name: "item1", price: 10}, {id: 2, name: "item2", price: 20}]
console.log(cartCount);  // 2