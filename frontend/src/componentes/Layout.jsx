import { useEffect, useState } from "react";
import Heade from "./Heade";

function Layout() {
    const [darkMode, setDarkMode] =  useState(false);

    // Recupera preferencia del usuario al cargar la página
    useEffect(() => {
        const userPrefersDark = localStorage.getItem("darkMode") === "enabled";
        if (userPrefersDark) {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
        }
    }, []);

    // Alternar modo oscuro
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("darkMode", !darkMode ? "enabled" : "disabled");
    };

    return (  
        <>
            {/* Contenedor para modo oscuro */}
            <div className="min-h-screen bg-gray-200 dark:bg-gray-900 transition-colors" >

                {/* Button de modo oscuro */}
                <button onClick={toggleDarkMode} className="fixed top-6 bg-gray-100 dark:bg-gray-600 p-2 rounded-full shadow-md">
                    {darkMode ? "🌞" : "🌙"}
                </button>

                {/* Navegacion */}
                <Heade />
            </div>
        </>
     );
}

export default Layout;