function addToCart(name, price) {
    let product = { name, price };
    localStorage.setItem("cart", JSON.stringify(product)); 
    window.location.href = "cart.html"; 
}

function displayCart() {
    let cartItem = JSON.parse(localStorage.getItem("cart"));
    if (cartItem) {
        document.getElementById("cart-items").innerHTML = `<p>${cartItem.name} - $${cartItem.price}</p>`;
        document.getElementById("total-price").innerText = `Total: $${cartItem.price}`;
    }
}

function proceedToPayment() {
    alert("Proceeding to payment...");
}

if (window.location.pathname.includes("cart.html")) {
    displayCart();
}
