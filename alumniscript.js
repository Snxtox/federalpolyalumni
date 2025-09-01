// Number of alumni to show per page
const alumniPerPage = 5;
let currentPage = 1;

// Get all alumni cards
const alumniCards = document.querySelectorAll(".alumni-card");
const totalPages = Math.ceil(alumniCards.length / alumniPerPage);

// Show a specific page
function showPage(page) {
  alumniCards.forEach((card, index) => {
    card.style.display = "none";
    if (index >= (page - 1) * alumniPerPage && index < page * alumniPerPage) {
      card.style.display = "block";
    }
  });

  renderPageNumbers();
}

// Render the pagination numbers
function renderPageNumbers() {
  const pageNumbers = document.getElementById("pageNumbers");
  pageNumbers.innerHTML = ""; // clear old numbers

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;

    if (i === currentPage) btn.classList.add("active");

    btn.addEventListener("click", () => {
      currentPage = i;
      showPage(currentPage);
    });

    pageNumbers.appendChild(btn);
  }
}

// Search function (search across all pages)
function searchAlumni() {
  const input = document.getElementById("searchBox").value.toLowerCase();
  let found = 0;

  alumniCards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (text.includes(input)) {
      card.style.display = "block";
      found++;
    } else {
      card.style.display = "none";
    }
  });

  // Hide pagination when searching
  document.getElementById("pageNumbers").style.display = input ? "none" : "block";

  // Reset to page 1 if search box is cleared
  if (!input) {
    currentPage = 1;
    showPage(currentPage);
  }
}

// Initialize the page on load
document.addEventListener("DOMContentLoaded", () => {
  showPage(currentPage);
});
