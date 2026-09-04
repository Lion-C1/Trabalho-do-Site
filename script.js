// ==========================================
// ALTERNÂNCIA DE TEMA
// ==========================================

const themeButton = document.getElementById("themeButton");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeButton.textContent = "☀️";
}

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const darkMode = document.body.classList.contains("dark");

    if (darkMode) {
        themeButton.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeButton.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});


// ==========================================
// FEEDBACK AO CLICAR NOS LINKS
// ==========================================

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {

    link.addEventListener("click", event => {

        const targetId = link.getAttribute("href");

        if (targetId === "#") {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// ==========================================
// ANIMAÇÃO DOS CARDS AO ENTRAREM NA TELA
// ==========================================

const cards = document.querySelectorAll(
    ".card, .collaboration-card, .reference"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);
            }
        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);
});


// ==========================================
// MENSAGEM NO CONSOLE
// ==========================================

console.log(
    "WebLab iniciado com sucesso! 🚀"
);
