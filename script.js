// ========== SCROLL REVEAL ANIMATION ==========
document.addEventListener("DOMContentLoaded", () => {
    const revealEls = document.querySelectorAll(".reveal");

    const onScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        revealEls.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < triggerBottom) {
                el.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
});