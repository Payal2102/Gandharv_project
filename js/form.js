// async function register() {
//     const name = $("#name").val();
//     const email = $("#email").val();
//     const date_time = $("#date_time").val();
//     const no_Of_People = $("#no_Of_People").val();
//     const special_Request = $("#message").val();
  
//     // // Regular expressions for email
//     // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     // //const dateRegex = /^\d{10}$/;
  
//     // let errorMessage = "";
  
//     // if (
//     //   name.trim() === "" ||
//     //   email.trim() === "" ||
//     //   date_time.trim() === "" ||
//     //   no_Of_People.trim() === ""
//     // ) {
//     //   errorMessage +=
//     //     '<span style="color: red; font-family: "Pacifico", cursive; font-size: 1px ;">Enter Mandatory Details*</span><br>';
//     // } else if (!emailRegex.test(email)) {
//     //   errorMessage +=
//     //     '<span style="color: red; font-family: "Pacifico", cursive; font-size: 1px ;">Enter valid Email.</span><br>';
//     // } else if (!dateRegex.test(date)) {
//     //   errorMessage +=
//     //     '<span style="color: red; font-family: "Pacifico", cursive; font-size: 1px ;">Enter valid Mobile Number.</span>';
//     // }
  
//     // if (errorMessage !== "") {
//     //   $("#dt").html(errorMessage);
//     //   return;
//     // }
  
//     const url = "http://localhost:8080/save";
//     const data = {
//       name: name,
//       email: email,
//       date_time: date_time,
//       no_Of_People: no_Of_People,
//       special_Request: special_Request,
//     };
  
//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
  
//       if (response.ok) {
//         const registrationStatus = await response.text();
//         $("#dt").html(registrationStatus);
//       } else {
//         $("#dt").html("Error checking registration.");
//       }
//     } catch (error) {
//       console.error(error);
//       $("#dt").html("An error occurred.");
//     }
//   }
  
//      //===================================================================================
  
//   async function getAllUsers() {
//     const url = "http://localhost:8080/get-all";
//     const result = await fetch(url, { method: "GET" });
//     const finalResult = await result.json();
  
//     // console.log(finalResult);
//     // document.getElementById('result').textContent = JSON.stringify(finalResult);
  
//     console.log(finalResult);
  
//     const resultContainer = document.getElementById("result");
//     resultContainer.innerHTML = ""; // Clear previous content
//     let data = "";
//     finalResult.forEach((user) => {
//       data =
//         data +
//         "<tr>" +
//         "<td>" +
//         user.name +
//         "</td>" +
//         "<td>" +
//         user.email +
//         "</td>" +
//         "<td>" +
//         user.date +
//         "</td>" +
//         "<td>" +
//         user.noOfPeople +
//         "</td>" +
//         "<td>" +
//         user.specialRequest +
//         "</td>" +
//         "</tr>";
//       //    resultContainer.innerHTML += ID: ${user.id}, Name: ${user.name}, Email: ${user.email}, Mobile: ${user.mobile}<br>;
//     });
  
//     $("#td-id").html(data);
//   }
  
//   $("#document").ready(function (){
//   $("#result").click(function () {
//     getAllUsers();
  
// });
// });
// ==========================================================================================

// document.getElementById("Registration-Form").addEventListener("submit", function(event) {
//     event.preventDefault();
    
//     const email = document.getElementById("email").value;
//     const name = document.getElementById("name").value;
    

//     fetch("http://localhost:8080/save", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             name: name,
//             email: email,
//             date: date,
//             noOfPeople: noOfPeople,
//             specialRequest: specialRequest,
//         })
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Registration-Failed");
//         }
//         window.location.href = "cantact.html"; // Redirect to dashboard on successful login
//     })
//     .catch(error => {
//         console.error("Error:", error);
//         // Display error message on the page
//         document.getElementById("error-message").innerText = "Invalid";
//     });
// });

//==========================================================================================

// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('myform');
  
//     form.addEventListener('submit', async function (event) {
//       event.preventDefault(); // Prevent the default form submission behavior
  
//       try {
//         // Get form data
//         const formData = new FormData(form);
  
//         // Convert form data to JSON object
//         const jsonData = {};
//         formData.forEach((value, key) => {
//           jsonData[key] = value;
//         });
  
//         // Define the URL of the API endpoint
//         const url = 'http://localhost:8080/save'; // Update with your backend endpoint
  
//         // Define options for the fetch request
//         const options = {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json' // Assuming JSON data
//           },
//           body: JSON.stringify(jsonData) // Convert JS object to JSON string
//         };
  
//         // Make the fetch request
//         const response = await fetch(url, options);
  
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
  
//         // Parse the JSON response
//         const responseData = await response.json();
  
//         // Handle the response data
//         console.log('Response:', responseData);
  
//         // Reset the form after successful submission if needed
//         form.reset();
//       } catch (error) {
//         // Handle any errors
//         console.error('There was a problem with the form submission:', error);
//       }
     
//     });
//   });
//   window.alert("Your Table is Book..!")

//*****************************************************************************************

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitButton').addEventListener('click', async function () {
      try {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date_time = document.getElementById('datetime').value;
        const no_of_people = document.getElementById('select1').value;
        const special_request = document.getElementById('message').value;
  
        const formData = {
          name: name,
          email: email,
          date_time: date_time,
          no_of_people: no_of_people,
          special_request: special_request
        };
  
        const response = await fetch('http://localhost:8080/save', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
  
        if (response.ok) {
          // Handle success
          console.log('Data saved successfully');
          // Optionally, reset the form after successful submission
          document.getElementById('myform').reset();
        } else {
          // Handle failure
          console.error('Failed to save data:', response.statusText);
        }
      } catch (error) {
        // Handle errors
        console.error('Error saving data:', error);
      }
    });
  });




