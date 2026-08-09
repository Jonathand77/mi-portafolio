import { technicalSkills, professionalSkills } from "./data/skills.js";
import { educacion, experiencia } from "./data/curriculum.js";
import { proyectos } from "./data/portfolio.js";
import { renderSkills, renderCurriculum, renderPortfolio } from "./render.js";
import { initNav } from "./nav.js";
import { initSkillsAnimation } from "./skills-animation.js";
import { initScrollReveal } from "./scroll-reveal.js";
import { initAnioActual } from "./footer.js";

renderSkills("skills-technical", technicalSkills);
renderSkills("skills-professional", professionalSkills);
renderCurriculum("curriculum-educacion", educacion, "izq");
renderCurriculum("curriculum-experiencia", experiencia, "der");
renderPortfolio("portfolio-galeria", proyectos);

initNav();
initSkillsAnimation();
initScrollReveal();
initAnioActual();
