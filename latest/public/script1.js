// Replace the config object with your own Firebase project credentials
const firebaseConfig = {
    // Your Firebase config goes here
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the Firestore database
  const db = firebase.firestore();
  
  function searchVaccinationCenters(event) {
    event.preventDefault();
    let pincodeInput = document.getElementById("pincode");
    let pincodeToSearch = pincodeInput.value.trim();
  
    // Query the Firestore database for matching centers
    db.collection("vaccinationCenters")
      .where("pincode", "==", pincodeToSearch)
      .get()
      .then(querySnapshot => {
        let matchingCenters = [];
        querySnapshot.forEach(doc => {
          matchingCenters.push(doc.data());
        });
  
        let resultContainer = document.getElementById("resultContainer");
        resultContainer.innerHTML = "";
  
        if (matchingCenters.length > 0) {
          let resultHTML = "<h3>Matching Vaccination Centers:</h3>";
          matchingCenters.forEach(center => {
            resultHTML += `<p>Pincode: ${center.pincode}</p>`;
            resultHTML += `<p>Center Name: ${center.name}</p>`;
            resultHTML += `<p>Working Hours: ${center.workingHours}</p>`;
            resultHTML += "<hr>";
          });
          resultContainer.innerHTML = resultHTML;
        } else {
          resultContainer.innerHTML = "<p>No matching centers found.</p>";
        }
      })
      .catch(error => {
        console.log("Error getting vaccination centers:", error);
      });
  }
  
  function bookSlot(event) {
    event.preventDefault();
    let pincodeInput = document.getElementById("bookingPincode");
    let centerSelect = document.getElementById("bookingCenter");
    let slotSelect = document.getElementById("bookingSlot");
  
    let pincode = pincodeInput.value.trim();
    let center = centerSelect.value;
    let slot = slotSelect.value;
  
    // Check if the maximum limit of 10 candidates per day has been reached for the slot
    // You may need to retrieve the selected center object from the database based on the pincode and center name
    // and then update the bookedSlots property accordingly.
  
    // Redirect to a new page after booking a slot
    window.location.href = "new.html";
  }
  
  // Attach event listeners to form submission and search button click
  document.getElementById("bookingForm").addEventListener("submit", bookSlot);
  document.getElementById("searchButton").addEventListener("click", searchVaccinationCenters);
  