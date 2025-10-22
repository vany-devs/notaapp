import { Outlet } from "react-router";
import CrearNota from "./compartidos/CrearNota";
import Informacion from "./Info";
import ListaNotas from "./ListaNotas";

function Main() {
  return (
    <section className="max-w-5xl mx-auto w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md transition-colors p-8 my-8 min-h-[70vh] flex items-center">
      <Outlet></Outlet>
    </section>
  );
}

export default Main;
