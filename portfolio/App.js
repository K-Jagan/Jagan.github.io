// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-item a");

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            document.querySelector(link.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
