export function initScrollReveal() {
    const elementos = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: .15 });

    elementos.forEach(el => observer.observe(el));
}
