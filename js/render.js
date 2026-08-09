export function renderSkills(containerId, skills) {
    const contenedor = document.getElementById(containerId);
    contenedor.innerHTML = skills.map((skill, indice) => `
        <div class="skill reveal" style="transition-delay: ${indice * 0.08}s">
            <div class="skill-encabezado">
                <span class="skill-nombre"><i class="${skill.icono}"></i> ${skill.nombre}</span>
                <span class="skill-porcentaje">${skill.porcentaje}%</span>
            </div>
            <div class="barra-skill">
                <div class="progreso" style="--ancho-final: ${skill.porcentaje}%"></div>
            </div>
        </div>
    `).join("");
}

export function renderCurriculum(containerId, items, lado) {
    const conector = lado === "izq" ? "conectori" : "conectord";
    const circulo = lado === "izq" ? "circuloi" : "circulod";
    const contenedor = document.getElementById(containerId);
    contenedor.innerHTML = items.map((item, indice) => `
        <div class="item ${lado} reveal" style="transition-delay: ${indice * 0.06}s">
            <span class="fecha">${item.fecha}</span>
            <h4>${item.titulo}</h4>
            <span class="casa"><i class="fa-solid fa-building-columns"></i> ${item.institucion}</span>
            <p>${item.descripcion}</p>
            <div class="${conector}">
                <div class="${circulo}"></div>
            </div>
        </div>
    `).join("");
}

export function renderPortfolio(containerId, proyectos) {
    const contenedor = document.getElementById(containerId);
    contenedor.innerHTML = proyectos.map((proyecto, indice) => `
        <div class="proyecto reveal" style="transition-delay: ${indice * 0.08}s">
            <div class="proyecto-img">
                <img src="${proyecto.img}" alt="${proyecto.titulo}" loading="lazy">
            </div>
            <div class="overlay">
                <h3>${proyecto.titulo}</h3>
                <a href="${proyecto.url}" target="_blank" rel="noopener noreferrer">
                    <button>
                        Visitar <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </button>
                </a>
            </div>
        </div>
    `).join("");
}
