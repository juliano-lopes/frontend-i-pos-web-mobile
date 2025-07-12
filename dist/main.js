"use strict";
function displayCurrentDate() {
    const today = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const formattedDate = today.toLocaleDateString('pt-BR', options);
    const outputElement = document.getElementById('current-date');
    if (outputElement) {
        outputElement.textContent = formattedDate;
    }
}
function setActivePage() {
    const navbar = document.getElementById("navbarNav");
    if (navbar) {
        navbar.querySelectorAll('a').forEach(element => {
            element.addEventListener("click", (e) => {
                const activePage = navbar.querySelector('.active');
                const target = e.target;
                if ((target === null || target === void 0 ? void 0 : target.href) != (activePage === null || activePage === void 0 ? void 0 : activePage.href)) {
                    target === null || target === void 0 ? void 0 : target.classList.add('active');
                    target === null || target === void 0 ? void 0 : target.setAttribute("aria-current", "page");
                    activePage === null || activePage === void 0 ? void 0 : activePage.classList.remove('active');
                    activePage === null || activePage === void 0 ? void 0 : activePage.removeAttribute("aria-current");
                }
            });
        });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    setActivePage();
    displayCurrentDate();
});
