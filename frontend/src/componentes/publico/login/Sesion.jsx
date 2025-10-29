import { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const navegar = useNavigate();

    // Manejar envío de formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!usuario  || !password) {
            alert("Por favor, completa todos los campos.");
            return false;
        }

        // Crear objeto de usuario
        const registro = {
            usuario,
            password,
        }
        console.log("Datos de registro enviados:", registro);


        // Limpiar datos
        setUsuario('');
        setPassword('');
        navegar("/informacion");

    }
    return ( 
        <>
            <div className="relative w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl dark:text-gray-200 shadow-lg p-8 pt-10 transition-colors duration-500 overflow-hidden">
                <h2 className="text-2xl font-black" >
                    Iniciar sesión
                </h2>
                <form onSubmit={handleSubmit} >
                    <div className="mb-4">
                        <label className="block text-gray-900 dark:text-gray-200 font-bold mb-2" htmlFor="username">
                            Nombre de usuario o Correo
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

export default Login;