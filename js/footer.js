export function initAnioActual() {
    const elemento = document.getElementById("anio-actual");
    if (elemento) {
        elemento.textContent = new Date().getFullYear();
    }
}
