function searchProducts() {
    let input = document.getElementById("search-bar").value.toLowerCase().trim();
    let productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        let productName = card.querySelector("h3").textContent.toLowerCase();
        if (productName.includes(input)) {
            card.style.display = "inline block";
        } else {
            card.style.display = "none";
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("search-bar").addEventListener("keyup", searchProducts);
});
