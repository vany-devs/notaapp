import Links from "./publico/paginas/utils/Link";

function Heade({ toggleDarkMode, darkMode }) {
  return (
    <header>
      <div className="max-w-5xl mx-auto flex justify-between items-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md px-6 py-4 transition-colors">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-sky-500 to-purple-500 text-transparent bg-clip-text">
          NotaApp
        </h1>

        <div className="flex items-center gap-4">
          <nav className="flex gap-6 text-gray-600 dark:text-gray-300 font-medium transition-colors">
            <Links to="/informacion" text="informacion" />
            <Links to="/lista-notas" text="Nota" />
            <Links to="/crear-nota" text="Crear Nota" />
          </nav>

          <button
            onClick={toggleDarkMode}
            className="bg-gray-100 dark:bg-gray-600 p-2 rounded-full shadow-md transition-colors"
            aria-label="Cambiar modo oscuro"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Heade;
