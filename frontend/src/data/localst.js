const NOTAS_PUBLICAS = "notas_publicas";
const NOTAS_PRIVADAS = "notas_privadas";

/**
 * Guarda una nota en localStorage sin sobrescribir las existentes
 */
export function guardarNotas(nuevaNota, esPrivada) {
    const clave = esPrivada ? NOTAS_PRIVADAS : NOTAS_PUBLICAS;
    const notasExistentes = JSON.parse(localStorage.getItem(clave)) || [];
    notasExistentes.push(nuevaNota);
    localStorage.setItem(clave, JSON.stringify(notasExistentes));
    console.log(`Nota ${esPrivada ? "privada" : "pública"} guardada:`, nuevaNota);
}

/**
 * Obtiene todas las notas de localStorage
 */
export function obtenerNotas(esPrivada) {
    const clave = esPrivada ? NOTAS_PRIVADAS : NOTAS_PUBLICAS;
    return JSON.parse(localStorage.getItem(clave)) || [];
}
