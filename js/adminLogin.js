function expand(label) {
  var elemId = label.getAttribute("for");
  document.getElementById(elemId).style.height = "45px";
  document.getElementById(elemId).classList.add('my-style');
  label.style.transform = "translateY(-45px)";
}


// adminLogin.js

document.getElementById("login").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default action of the link

  // Get the values entered by the user
  var name = document.getElementById("name").value;
  var password = document.getElementById("password").value;

  // Validate name and password
  if (!name || !password) {
      alert("Please enter both name and password");
      return;
  }

  // Send an HTTP POST request to your backend to authenticate the user
  fetch('http://localhost:8080/admin/add', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: admin, password:  1234})
  })
  .then(response => {
      if (response.ok) {
          // Redirect the user to the website upon successful login
          window.location.href = "./index.html";
      } else {
          // Handle authentication failure (e.g., display an error message)
          alert("Login failed. Please check your name and password.");
      }
  })
  .catch(error => {
      console.error('Error during login:', error);
      alert("An error occurred during login");
  });
});


