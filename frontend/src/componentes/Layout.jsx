import { useEffect, useState } from "react";

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
            <div className="min-h-screen bg-gray-200 dark:bg-gray-900 transition-colors" >
                <button onClick={toggleDarkMode} className="fixed top-6 bg-gray-100 dark:bg-gray-600 p-2 rounded-full shadow-md">
                    {darkMode ? "🌞" : "🌙"}
                </button>
            </div>
        </>
     );
}

export default Layout;