const homeBtn = document.getElementById("home-btn");
const dropdown = document.getElementById("home-dropdown");

homeBtn.addEventListener("mouseenter", () => {
    dropdown.classList.add("show");
});

homeBtn.addEventListener("mouseleave", () => {
    dropdown.classList.remove("show");
});
