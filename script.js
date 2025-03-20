
function redirectToLogin() {
    window.location.href = "login.html";
}

function redirectToCart() {
    window.location.href = "cart.html";
}

function openInstagram() {
    window.open("https://www.instagram.com/mr_musaddique_001", "_blank");
}

function openWhatsApp() {
    window.open("https://wa.me/+919500358806", "_blank");
}

document.addEventListener("DOMContentLoaded", function () {
    let homeIcon = document.getElementById("home-icon");
    if (homeIcon) {
        homeIcon.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "index.html";
        });
    }
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name && email && message) {
        document.getElementById("popup-message").style.display = "flex";
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill out all fields.");
    }
});

function closePopup() {
    document.getElementById("popup-message").style.display = "none";
}
