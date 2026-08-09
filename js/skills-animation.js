export function initSkillsAnimation() {
    const barras = document.querySelectorAll(".skills .progreso");

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    barras.forEach(barra => observer.observe(barra));
}
