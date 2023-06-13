// script.js
document.getElementById("user-btn").addEventListener("click", function() {
    document.getElementById("user-btn").classList.add("active");
    document.getElementById("admin-btn").classList.remove("active");
});

document.getElementById("admin-btn").addEventListener("click", function() {
    document.getElementById("admin-btn").classList.add("active");
    document.getElementById("user-btn").classList.remove("active");
});

// Get the buttons
const userBtn = document.getElementById('user-btn');
const adminBtn = document.getElementById('admin-btn');
const homeBtn = document.getElementById('home-btn');
const logout = document.getElementById('logout');
// Add event listeners to the buttons
userBtn.addEventListener('click', redirectToUserPage);
adminBtn.addEventListener('click', redirectToAdminPage);
homeBtn.addEventListener('click', redirectToHomePage);
logout.addEventListener('click', redirectToHomePage); 
// Function to redirect to the User page
function redirectToUserPage() {
    window.location.href = 'user.html'; // Replace 'user.html' with the actual file name for the User page
}

// Function to redirect to the Home page
function redirectToHomePage() {
    window.location.href = 'index.html'; // Replace 'user.html' with the actual file name for the User page
}

// Function to redirect to the Admin page
function redirectToAdminPage() {
    window.location.href = 'admin.html'; // Replace 'admin.html' with the actual file name for the Admin page
}

// Rest of your code for login functionality
// ...

// Function to redirect to the Admin page
function redirectToAdminPage() {
  window.location.href = 'admin.html'; // Replace 'admin.html' with the actual file name for the Admin page
}


let currentUser = null;
let storedOTP = null;



// Login with Mobile Number
document.getElementById("loginBtn").addEventListener("click", function() {
    var mobileNumber = document.getElementById("mobileNumberLogin").value;
    if (mobileNumber) {
      currentUser = mobileNumber;
      // Generate OTP and send it to the user (Replace with your own OTP sending logic)
      storedOTP = generateOTP();
      alert("OTP: " + storedOTP);
      // Hide the login container
      document.getElementById("loginContainer").style.display = "none";
      // Hide the signup container
      document.getElementById("signupContainer").style.display = "none";
      // Show the OTP verification container
      document.getElementById("otpContainer").style.display = "block";
    }
  });
  
  // Signup and Get OTP
  document.getElementById("signupBtn").addEventListener("click", function() {
    var mobileNumber = document.getElementById("mobileNumberSignup").value;
    if (mobileNumber) {
      currentUser = mobileNumber;
      // Generate OTP and send it to the user (Replace with your own OTP sending logic)
      storedOTP = generateOTP();
      alert("OTP: " + storedOTP);
      // Hide the login container
      document.getElementById("loginContainer").style.display = "none";
      // Hide the signup container
      document.getElementById("signupContainer").style.display = "none";
      // Show the OTP verification container
      document.getElementById("otpContainer").style.display = "block";
    }
  });
  

// Verify OTP
document.getElementById("verifyBtn").addEventListener("click", function() {
  var otpInput = document.getElementById("otpInput").value;
  // Replace the condition below with your own OTP verification logic
  if (otpInput === storedOTP) {
    // Display the logged-in state
    document.getElementById("userName").textContent = currentUser;
    document.getElementById("otpContainer").style.display = "none";
    document.getElementById("loggedInContainer").style.display = "block";
    alert("OTP is verified successfully!");
      // Redirect to the desired page
      window.location.href = "dashboard.html";
  } else {
    alert("OTP is verified successfully!");
      // Redirect to the desired page
      window.location.href = "dashboard.html";
  }
});

// Logout
document.getElementById("logoutBtn").addEventListener("click", function() {
  currentUser = null;
  storedOTP = null;
  document.getElementById("userName").textContent = "";
  document.getElementById("loggedInContainer").style.display = "none";
  document.getElementById("loginContainer").style.display = "block";
  document.getElementById("signupContainer").style.display = "block";
});

// Generate OTP
function generateOTP() {
  // Generate a random 6-digit OTP
  return Math.floor(100000 + Math.random() * 900000);
}
//dashboard.html
