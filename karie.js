document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'Earl Christian' && password === '1234') {
        window.location.href = "homepage.html";
    } else {
        alert('Invalid username or password. Please try again.');
    }
});