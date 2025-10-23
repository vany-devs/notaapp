/* eslint-disable no-unused-vars */
import { useState } from "react";
import { guardarNota } from "../../data/guardarNota";
import { useNavigate } from "react-router";

function CrearNota() {
  // Estados de formulario
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [prioridad, setPrioridad] = useState("baja");
  const [publica, setPublica] = useState(true);
  const [usuarioRegistrado, setUsuarioRegistrado] = useState(true);
  const navegar = useNavigate();

  // Manejar cambios
  const handlePrioridadChange = (e) => setPrioridad(e.target.value);
  const togglePublica = () => {
    if (usuarioRegistrado) setPublica(!publica);
  };

  // Gradiente dinámico: combinación Visibilidad + Prioridad
  const gradientes = {
    publica: {
      baja: "from-green-400 to-green-600",
      media: "from-green-400 to-yellow-500",
      alta: "from-green-400 to-red-500",
    },
    privada: {
      baja: "from-blue-400 to-green-600",
      media: "from-blue-400 to-yellow-500",
      alta: "from-blue-400 to-red-500",
    },
  };

  const barraGradient = gradientes[publica ? "publica" : "privada"][prioridad];

  // Manejar envío de formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recarga de página

    const nuevaNota = {
      titulo,
      contenido,
      prioridad,
      publica,
      fechaCreacion: new Date().toISOString(),
    };

    console.log("Nueva nota enviada a guardarNota:", nuevaNota);
    guardarNota(nuevaNota);
    navegar("/lista-notas");

    // Limpiar formulario
    setTitulo("");
    setContenido("");
    setPrioridad("baja");
    setPublica(true);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-8 pt-10 transition-colors duration-500 overflow-hidden">

      {/* Barra superior dinámica según prioridad + visibilidad */}
      <div
        className={`absolute top-0 left-0 w-full h-1.5 rounded-t-2xl bg-gradient-to-r ${barraGradient}`}
      />

      <h2 className="text-3xl font-extrabold mb-6 text-center bg-gradient-to-r from-sky-500 to-purple-500 text-transparent bg-clip-text">
        Crear Nueva Nota
      </h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Título */}
        <div>
          <label
            htmlFor="titulo"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Título
          </label>
          <input
            type="text"
            id="titulo"
            placeholder="Ej. Plan de desarrollo personal"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
          />
        </div>

        {/* Contenido */}
        <div>
          <label
            htmlFor="contenido"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Contenido
          </label>
          <textarea
            id="contenido"
            rows="6"
            placeholder="Escribe tu nota aquí..."
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none resize-none transition-all"
          ></textarea>
        </div>

        {/* Prioridad */}
        <div>
          <label
            htmlFor="prioridad"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Prioridad
          </label>
          <select
            id="prioridad"
            value={prioridad}
            onChange={handlePrioridadChange}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
          >
            <option value="baja">🟢 Baja</option>
            <option value="media">🟡 Media</option>
            <option value="alta">🔴 Alta</option>
          </select>
        </div>

        {/* Pública / Privada */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Visibilidad
          </label>
          <div className="flex items-center gap-4">
            <span className="text-gray-600 dark:text-gray-300">
              {publica ? "🟢 Pública" : "🔒 Privada"}
            </span>
            <button
              type="button"
              onClick={togglePublica}
              className={`px-3 py-1 rounded-full font-medium border transition-all ${
                usuarioRegistrado
                  ? "bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 border-gray-300 dark:border-gray-500"
                  : "bg-gray-200 dark:bg-gray-700 cursor-not-allowed border-gray-300 dark:border-gray-600 opacity-50"
              }`}
            >
              Cambiar
            </button>
          </div>
          {!usuarioRegistrado && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Debes estar registrado para activar notas privadas.
            </p>
          )}
        </div>

        {/* Botón Guardar */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-sky-500 to-purple-500 hover:opacity-90 text-white font-bold py-3 rounded-lg shadow-md transition-all"
        >
          Guardar Nota
        </button>
      </form>
    </div>
  );
}

export default CrearNota;
