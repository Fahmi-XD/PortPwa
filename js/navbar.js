document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const navbarButton = document.getElementById("navbar-btn");
    const navbarRight = document.getElementById("navbar-right");

    navbarButton.addEventListener("click", () => {
        navbar.classList.toggle("show");
    });

    navbarRight.addEventListener("click", () => {
        navbarRight.classList.toggle("active");
    });
});
