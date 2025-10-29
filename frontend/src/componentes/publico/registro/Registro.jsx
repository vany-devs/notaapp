import { useState } from "react";
import { useNavigate } from "react-router";
import { validarCorreo } from "./validarcorreo";

function Registro() {
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRep, setPasswordRep] = useState('');
    const navegar = useNavigate();

    // Manejar envío de formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!usuario || !email || !password || !passwordRep) {
            alert("Por favor, completa todos los campos.");
            return false;
        }

        if(validarCorreo(email) === false){
            alert("Por favor, ingresa un correo electrónico válido.");
            return false;
        }

        if (password !== passwordRep) {
            alert("Las contraseñas no coinciden.");
            return false;
        }

        const datosRegistro = {
            usuario,
            email,
            password,
            passwordRep,
            idRegistro: new Date(),
        };
        console.log("Datos de registro enviados:", datosRegistro);
        navegar("/informacion");

        // Limpiar formulario
        setUsuario('');
        setEmail('');
        setPassword('');
        setPasswordRep('');
    };


    return ( 
        <>
            <div className="relative w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl dark:text-gray-200 shadow-lg p-8 pt-10 transition-colors duration-500 overflow-hidden">
                <h2 className="text-2xl font-black"> Registro </h2>
                <p className="mt-2 mb-5"> Crea tu cuenta llenando el siguiente formulario </p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-900 dark:text-gray-200 font-bold mb-2" htmlFor="username">
                            Nombre de usuario
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Ingresa tu nombre de usuario"
                            onChange={(e) => setUsuario(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-900 dark:text-gray-300 font-bold mb-2" htmlFor="email">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Ingresa tu correo electrónico"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-900 dark:text-gray-300 font-bold mb-2" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Ingresa tu contraseña"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="block text-gray-900 dark:text-gray-300 font-bold my-4" htmlFor="password-rep">
                            Repetir Contraseña
                        </label>
                        <input
                            type="password"
                            id="password-rep"
                            className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Repite tu contraseña"
                            onChange={(e) => setPasswordRep(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Registrarse
                        </button>
                    </div>
                </form>
            </div>
        </>
     );
}

export default Registro;