document.getElementById('accountForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Here you can perform actions like sending the data to the server for updating the account information
    // For simplicity, let's just display a success message
    var message = document.getElementById('message');
    message.textContent = 'Account information updated successfully!';
  });
  