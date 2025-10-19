export function guardarNota(nota) {
    const nuevaNota = {
        ...nota,
        id: Date.now(),
        fechaCreacion: new Date().toISOString(),
        fechaActualizacion: new Date().toISOString(),
    };
    const notasGuardadas = JSON.parse(localStorage.getItem("notas")) || [];
    notasGuardadas.push(nuevaNota);
    localStorage.setItem("notas", JSON.stringify(notasGuardadas));
    return nuevaNota;
}