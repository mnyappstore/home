// Language Switching
const langButtons = document.querySelectorAll(".lang-btn");
const translatableElements = document.querySelectorAll("[data-en]");

langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        langButtons.forEach((btn) => btn.classList.remove("active"));
        btn.classList.add("active");
        const lang = btn.id === "lang-en" ? "en" : "tr";

        translatableElements.forEach((el) => {
            el.textContent = el.getAttribute(`data-${lang}`);
        });
    });
});
