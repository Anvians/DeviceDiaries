// Get references to the input field and results container
const searchInput = document.getElementById("searchInput");
const resultsContainer = document.getElementById("resultsContainer");
const articleList = document.getElementById("articleList").getElementsByTagName("li");

// Function to perform search and display results
function performSearch(query) {
  // Clear previous search results
  resultsContainer.innerHTML = "";

  // Loop through articles and check for a match
  let resultsFound = false;
  for (const article of articleList) {
    const articleText = article.textContent.toLowerCase();
    if (articleText.includes(query.toLowerCase())) {
      resultsContainer.appendChild(article.cloneNode(true));
      resultsFound = true;
    }
  }

  if (!resultsFound) {
    resultsContainer.innerHTML = "<p>No results found.</p>";
  }
  
  // Show/hide results container based on results
  resultsContainer.style.display = resultsFound ? "block" : "none";
}

// Event listener for input changes
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();
  performSearch(query);
});
