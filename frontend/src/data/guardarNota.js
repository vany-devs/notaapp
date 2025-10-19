import { guardarNotas } from "./localst";

export function guardarNota(nota) {
    const nuevaNota = {
        ...nota,
        id: Date.now(),
        fechaActualizacion: new Date().toISOString(),
    };

    guardarNotas(nuevaNota, !nota.publica); // Si no es pública, es privada
    return nuevaNota;
}
