import Links from "./compartidos/Link";

function Heade() {
    return ( 
        <>
            <header className="max-w-5xl mx-auto flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-b-lg shadow-md transition-colors">
                    <h1 className="text-3xl font-extrabold bg-gradient-to-r from-sky-500 to-purple-500 text-transparent bg-clip-text">NotaApp</h1>
                    <nav className="flex gap-6 text-gray-600 dark:text-gray-300 font-medium transition-colors">
                        {/* Aquí irían las rutas o componentes hijos */}
                        <Links url="#" text="Inicio" />
                        <Links url="#" text="Nota" />
                        <Links url="#" text="Crear Nota" />
                    </nav>
            </header>
        </>
     );
}

export default Heade;