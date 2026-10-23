const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

// Open and close the mobile navigation menu
menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});

// Close the menu after clicking a navigation link
const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("show");
        menuBtn.textContent = "☰";
    });
});

// Show a welcome message in the browser console
console.log("Welcome to Jenileya's Portfolio!");