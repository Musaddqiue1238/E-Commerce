document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    alert(`Logging in as: ${username}`);
    closeLoginPopup();
});
