let menuVisible = false;

function alternarMenu() {
    const nav = document.getElementById("nav");
    const toggle = document.getElementById("nav-toggle");
    menuVisible = !menuVisible;
    nav.classList.toggle("responsive", menuVisible);
    toggle.setAttribute("aria-expanded", String(menuVisible));
}

function cerrarMenu() {
    const nav = document.getElementById("nav");
    document.getElementById("nav-toggle").setAttribute("aria-expanded", "false");
    nav.classList.remove("responsive");
    menuVisible = false;
}

function initSombraScroll() {
    const header = document.querySelector(".contenedor-header");
    const actualizar = () => header.classList.toggle("scrolled", window.scrollY > 10);
    actualizar();
    window.addEventListener("scroll", actualizar, { passive: true });
}

function initScrollSpy() {
    const enlaces = document.querySelectorAll("#nav a");
    const enlacePorSeccion = new Map();
    enlaces.forEach(enlace => enlacePorSeccion.set(enlace.getAttribute("href").slice(1), enlace));

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const enlace = enlacePorSeccion.get(entry.target.id);
            if (!enlace || !entry.isIntersecting) return;
            enlaces.forEach(a => a.classList.remove("active"));
            enlace.classList.add("active");
        });
    }, { rootMargin: "-45% 0px -50% 0px" });

    document.querySelectorAll("section[id]").forEach(seccion => observer.observe(seccion));
}

export function initNav() {
    document.getElementById("nav-toggle").addEventListener("click", alternarMenu);
    document.querySelectorAll("#nav a").forEach(link => {
        link.addEventListener("click", cerrarMenu);
    });
    initSombraScroll();
    initScrollSpy();
}
