function expand(label) {
  var elemId = label.getAttribute("for");
  document.getElementById(elemId).style.height = "45px";
  document.getElementById(elemId).classList.add('my-style');
  label.style.transform = "translateY(-45px)";
}

document.getElementById("myForm").addEventListener("login", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        window.location.href = "adminLogin.html"; // Redirect to admin dashboard
    } else {
        document.getElementById("errorMessage").innerText = "Invalid username or password";
    }
});




// // Add an async keyword to the event listener function
// document.getElementById("login").addEventListener("click", async function(event) {
//   event.preventDefault(); // Prevent the default action of the link

//   // Get the values entered by the user
//   var username = document.getElementById("username").value;
//   var password = document.getElementById("password").value;

//   // Validate username and password
//   if (!username || !password) {
//       alert("Please enter both username and password");
//       return;
//   }

//   try {
//       // Send an HTTP POST request to your backend to authenticate the user
//       const response = await fetch('http://localhost:8080/admin', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ username: username, password: password })
//       });

//       if (response.ok) {
//           // Redirect the user to the website upon successful login
//           window.location.href = "./index.html";
//       } else {
//           // Handle authentication failure (e.g., display an error message)
//           alert("Login failed. Please check your username and password.");
//       }
//   } catch (error) {
//       console.error('Error during login:', error);
     
//   }
// });
