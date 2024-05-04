// Sample user information (replace with actual user data)
const user = {
    name: "John Doe",
    location: "New York, USA",
    joined: "January 1, 2020",
  };
  
  // Function to populate user information on the profile page
  function populateProfile() {
    const profileInfo = document.getElementById("profileInfo");
    profileInfo.innerHTML = `
      <h2>${user.name}</h2>
      <p>Location: ${user.location}</p>
      <p>Joined: ${user.joined}</p>
    `;
  }
  
  // Call the function to populate the profile information when the page loads
  window.onload = populateProfile;

  document.getElementById("backButton").addEventListener("click", function() {
    window.history.back("homepage.html");
  });
  
  