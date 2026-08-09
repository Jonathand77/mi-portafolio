# **💼 Mi Portafolio**

---

## 🛠️ Stack tecnológico

![HTML5](https://img.shields.io/badge/HTML5-Markup-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Estilos-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES%20Modules-F7DF1E?logo=javascript&logoColor=black)
![Font Awesome](https://img.shields.io/badge/Font%20Awesome-Iconos-528DD7?logo=fontawesome&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deploy-222222?logo=githubpages&logoColor=white)
![Architecture](https://img.shields.io/badge/Architecture-Data%20%2F%20Render%20%2F%20UI-blue)
![GitHub repo size](https://img.shields.io/github/repo-size/Jonathand77/mi-portafolio)
![GitHub last commit](https://img.shields.io/github/last-commit/Jonathand77/mi-portafolio)
![Languages](https://img.shields.io/github/languages/count/Jonathand77/mi-portafolio)
![License](https://img.shields.io/badge/Licencia-MIT-green)

## 👤 Autor

| 👨‍💻 Nombre | 📧 Correo | 🌐 Sitio en vivo | 🐙 Usuario GitHub |
|---|---|---|---|
| **Jonathan David Fernandez Vargas** | jonathanfdez62@gmail.com | [jonathand77.github.io/mi-portafolio](https://jonathand77.github.io/mi-portafolio/) | [Jonathand77](https://github.com/Jonathand77) |

**Portafolio personal en HTML, CSS y JavaScript puro (sin frameworks) para presentar mi perfil, habilidades, experiencia y proyectos.**

---

## 1. 🔍 Introducción

Este proyecto es mi sitio web personal de portafolio, pensado para mostrar de forma clara y visualmente atractiva quién soy, qué habilidades técnicas y profesionales tengo, mi trayectoria académica y laboral, y los proyectos en los que he trabajado.

Está construido con **HTML, CSS y JavaScript vanilla** (sin frameworks ni bundlers): el contenido dinámico (skills, currículum y proyectos) vive en módulos de datos separados (`js/data/`) y se renderiza en el DOM mediante funciones puras (`js/render.js`), manteniendo la lógica de presentación desacoplada del contenido. Esto permite actualizar la información del sitio editando únicamente los archivos de datos, sin tocar el HTML ni la lógica de renderizado.

## 2. ⚙️ Requisitos Previos

Antes de comenzar, asegúrate de contar con:
- [Git](https://git-scm.com/)
- Un navegador web moderno (Chrome, Edge, Firefox, etc.)
- Un editor de código como Visual Studio Code (opcional)
- La extensión **Live Server** (o cualquier servidor estático) para desarrollo local (opcional, pero recomendado)

> No se requiere Node.js, npm ni ningún gestor de paquetes: el proyecto no tiene dependencias ni pasos de build.

## 📦 Estructura del Proyecto

```
mi-portafolio/
├── RAÍZ
│   ├── .gitignore
│   ├── .git/
│   ├── LICENSE
│   ├── index.html
│   ├── css/
│   │   ├── variables.css
│   │   ├── base.css
│   │   ├── header.css
│   │   ├── hero.css
│   │   ├── about.css
│   │   ├── skills.css
│   │   ├── curriculum.css
│   │   ├── portfolio.css
│   │   └── footer.css
│   ├── js/
│   │   ├── main.js
│   │   ├── render.js
│   │   ├── nav.js
│   │   ├── footer.js
│   │   ├── scroll-reveal.js
│   │   ├── skills-animation.js
│   │   └── data/
│   │       ├── skills.js
│   │       ├── curriculum.js
│   │       └── portfolio.js
│   ├── img/
│   │   ├── LogoJonathan.png
│   │   ├── foto.jpg
│   │   ├── fondo.jpg
│   │   └── ... (logos de proyectos)
│   └── README.md
```

---

## 3. 🖥️ Guía Paso a Paso para Levantar el Proyecto

### 3.1 Clonar el repositorio

```bash
git clone https://github.com/Jonathand77/mi-portafolio.git
cd mi-portafolio
```

### 3.2 Abrir el proyecto

**⚠️ Nota:** Al ser un sitio 100% estático (sin build ni backend), no necesitas instalar dependencias. Basta con servir la carpeta del proyecto.

**Opción A — Live Server (recomendada):**
1. Abre la carpeta en Visual Studio Code.
2. Instala la extensión **Live Server**.
3. Clic derecho sobre `index.html` → **Open with Live Server**.

**Opción B — Servidor estático rápido:**
```bash
npx serve .
```

**Opción C — Abrir directamente:**
Abre el archivo `index.html` en tu navegador (algunas rutas relativas funcionan mejor con un servidor local que abriendo el archivo directamente).

### 3.3 Ver el sitio

Con Live Server o `npx serve`, el sitio quedará disponible en:
`http://localhost:5500` (Live Server) o `http://localhost:3000` (serve)

---

## 4. 🧩 Arquitectura y Buenas Prácticas

- **Separación de datos y presentación**: el contenido editable (skills, educación, experiencia, proyectos) vive en `js/data/*.js` como arreglos de objetos planos; `js/render.js` contiene funciones puras que reciben esos datos y generan el HTML correspondiente.
- **Módulos ES nativos**: no hay bundler ni transpilador; `index.html` carga `js/main.js` con `type="module"`, que importa y orquesta el resto de módulos (`nav.js`, `footer.js`, `scroll-reveal.js`, `skills-animation.js`).
- **CSS organizado por sección**: cada bloque de la página (`header`, `hero`, `about`, `skills`, `curriculum`, `portfolio`, `footer`) tiene su propio archivo, con variables de diseño centralizadas en `css/variables.css`.
- **Interacciones progresivas con `IntersectionObserver`**: las animaciones de aparición (`scroll-reveal.js`) y el llenado de las barras de skills (`skills-animation.js`) se activan solo cuando el elemento entra en el viewport, sin librerías externas.
- **Navegación accesible**: `nav.js` gestiona el menú responsive (hamburguesa en móvil), el resaltado de la sección activa mediante scroll-spy y la sombra del header al hacer scroll.

## 5. 🧭 Secciones del Sitio

| Sección | Descripción |
|---|---|
| **Inicio** | Presentación principal con foto, título y enlaces a redes sociales. |
| **Sobre Mí** | Descripción personal, datos de contacto, intereses y botón de descarga del CV. |
| **Skills** | Habilidades técnicas y profesionales con barras de progreso animadas, definidas en `js/data/skills.js`. |
| **Curriculum** | Línea de tiempo de educación y experiencia laboral, definida en `js/data/curriculum.js`. |
| **Portfolio** | Galería de proyectos con imagen, título y enlace, definida en `js/data/portfolio.js`. |

## 6. ✏️ Personalización

Para actualizar el contenido del sitio no es necesario tocar el HTML: basta con editar los archivos en `js/data/`:
- **`skills.js`** → nombre, porcentaje e ícono (Font Awesome) de cada habilidad.
- **`curriculum.js`** → título, institución, fecha y descripción de cada ítem de educación (`educacion`) y experiencia (`experiencia`).
- **`portfolio.js`** → título, imagen y URL de cada proyecto mostrado en la galería.

## 7. 🚀 Despliegue

El sitio se publica de forma estática con **GitHub Pages**, sirviendo directamente el contenido de la rama principal:
`https://jonathand77.github.io/mi-portafolio/`

---

## Autores ✒️

* **Jonathan Fernandez** - [Jonathand77](https://github.com/Jonathand77)

## Licencia 📄

Este proyecto está bajo la Licencia (MIT LICENSE) - mira el archivo [LICENSE](LICENSE) para detalles.

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Dar las gracias públicamente 🤓

---
⌨️ por [Jonathand77](https://github.com/Jonathand77) 😊
