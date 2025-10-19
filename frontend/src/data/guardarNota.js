export function guardarNota(nota) {
    const nuevaNota = {
        ...nota,
        id: Date.now(),
        fechaActualizacion: new Date().toISOString(),
    };
    console.log("Nota guardada:", nuevaNota);
    return nuevaNota;
}