function NotaCard({
  titulo,
  contenido,
  prioridad = "baja",
  publica = true,
  usuario = null, // null = anónimo
  fechaCreacion,
  fechaActualizacion,
}) {
  // Gradiente de barra según prioridad + visibilidad
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

  return (
    <div className="relative w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-6 pt-8 mb-6 transition-colors duration-500 overflow-hidden">
      
      {/* Barra superior */}
      <div
        className={`absolute top-0 left-0 w-full h-1.5 rounded-t-2xl bg-gradient-to-r ${barraGradient}`}
      />

      {/* Contenido */}
      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{titulo}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-line">{contenido}</p>

      {/* Meta información */}
      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
        <div>
          <span className="mr-2 font-medium">Prioridad:</span> {prioridad}
          <span className="ml-4 font-medium">Visibilidad:</span> {publica ? "Pública" : "Privada"}
        </div>
        <div className="text-right">
          <div>
            <span className="font-medium">Creado:</span> {fechaCreacion.toLocaleDateString()}
          </div>
          <div>
            <span className="font-medium">Actualizado:</span> {fechaActualizacion.toLocaleDateString()}
          </div>
          <div>
            <span className="font-medium">Usuario:</span> {usuario || "Anónimo"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotaCard;
