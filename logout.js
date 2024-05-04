const logoutBtn = document.querySelector(".logout-btn")

logoutBtn.addEventListener("click", () => {
    window.location.replace("index.html");
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});