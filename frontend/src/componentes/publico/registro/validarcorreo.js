// Se crea una funcion para validar el formato del correo electrónico utilizando una expresión regular.
export function validarCorreo(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}