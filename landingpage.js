
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

// Toggle the navigation menu on mobile.
menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("open");

    const isOpen = navbar.classList.contains("open");

    menuBtn.textContent = isOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
});

// Close the menu after clicking a navigation link.
document.querySelectorAll("#navbar a").forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("open");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// Automatically display the current year.
document.getElementById("year").textContent =
    new Date().getFullYear();

console.log("LGU Opol landing page loaded successfully!");
