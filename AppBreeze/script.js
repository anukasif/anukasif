function searchApps() {
  const query = document.getElementById('search').value.toLowerCase();
  const apps = document.querySelectorAll('.app-card'); // Select all app cards
  console.log("Searching for:", document.getElementById("search").value);

  // Loop through each app card and filter based on the query
  apps.forEach(app => {
      const appName = app.getAttribute('data-name').toLowerCase(); // Get the app name
      app.style.display = appName.includes(query) ? '' : 'none'; // Show/hide app card
  });
}

function clearSearch() {
  const searchInput = document.getElementById("search"); // Reference the search input field
  searchInput.value = ''; // Clear the input
  searchInput.focus(); // Optional: Bring focus back to the input field
  
  // Reset all app cards to visible
  const apps = document.querySelectorAll('.app-card');
  apps.forEach(app => {
      app.style.display = ''; // Make all app cards visible
  });
}


