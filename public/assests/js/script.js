// Overlay transition
const container = document.getElementById('container');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const goToRegister = document.getElementById('goToRegister'); // Optional if you have another button for registering

// Handle overlay transition
signUpButton.addEventListener('click', () => container.classList.add('right-panel-active'));
signInButton.addEventListener('click', () => container.classList.remove('right-panel-active'));
goToRegister?.addEventListener('click', () => container.classList.add('right-panel-active'));

// Login form validation and user redirection
async function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('userType').value; // Get the selected user type
    const errorElement = document.getElementById('loginError');

    // Clear previous error message
    errorElement.textContent = "";

    // Simple validation
    if (username === "" || password === "" || userType === "") {
        errorElement.textContent = "Please fill in all fields.";
        return false; // Stop execution if fields are empty
    }

    // // Fetch user data from Google Apps Script or API
    // const users = await fetchUserData();

    // // Check if username and password match any user
    // const userExists = users.some(user => user.username === username && user.password === password);

    // if (userExists) {
    //     // Redirect based on the selected user type
    //     if (userType === "User") {
    //         window.location.href = "/dash"; // Change to your actual User Interface page
    //     } else if (userType === "Candidate") {
    //         window.location.href = "/main"; // Change to your actual Candidate Interface page
    //     } else if (userType === "Admin") {
    //         window.location.href = "/main"; // Change to your actual Admin Interface page
    //     }
    // } else {
    //     errorElement.textContent = "Invalid username or password.";
    // }
    return true;
}

// Function to fetch user data (already implemented)
// async function fetchUserData() {
//     const apiUrl = 'https://script.google.com/macros/s/AKfycbzUIweH_0U2iBE_fwEiOFECfj_VWQmDVfgPiR3XGVSc0zpOuxE0EIIzO5kg4H-bIHI4/exec';
   
//     try {
//         const response = await fetch(apiUrl);
       
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         return data; // Assume data is an array of user objects
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return [];
//     }
// }

// Register form validation (already implemented)
function validateRegister() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('registerPassword').value.trim();
    const dob = document.getElementById('dob').value;
    const registerError = document.getElementById('registerError');

    if (name === '' || email === '' || password === '' || dob === '') {
        registerError.textContent = 'Please fill in all fields.';
        return false;
    }
    registerError.textContent = ''; 
    window.location.href = "dash.html"; // Redirect after successful registration
}

