function displayCurrentDate(): void {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
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

function setActivePage(): void {
    const navbar = document.getElementById("navbarNav");
    if (navbar) {
        navbar.querySelectorAll('a').forEach(element => {
            element.addEventListener("click", (e) => {
                const activePage: HTMLAnchorElement | null = navbar.querySelector('.active');
                const target: HTMLAnchorElement | null = e.target as HTMLAnchorElement;
                if (target?.href != activePage?.href) {
                    target?.classList.add('active');
                    target?.setAttribute("aria-current", "page");
                    activePage?.classList.remove('active');
                    activePage?.removeAttribute("aria-current");
                }
            });
        });

    }
}
document.addEventListener('DOMContentLoaded', () => {
    setActivePage();
    displayCurrentDate();
});
