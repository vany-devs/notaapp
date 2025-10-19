import { useEffect, useState } from "react";
import Heade from "./Heade";
import Main from "./Main";

function Layout() {
  const [darkMode, setDarkMode] = useState(false);

  // Recuperar preferencia de modo oscuro
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
    <div className="min-h-screen flex flex-col bg-gray-200 dark:bg-gray-900 transition-colors duration-500">
      <Heade toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <main className="flex-grow flex items-center">
        <Main />
      </main>
      <footer className="py-0">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md transition-colors text-gray-600 dark:text-gray-300 text-center p-4">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-bold bg-gradient-to-r from-sky-500 to-purple-500 text-transparent bg-clip-text">
              Vany-devs
            </span>{" "}
            — Desarrollado con ❤️ junto a{" "}
            <span className="font-semibold">Perla Green</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
