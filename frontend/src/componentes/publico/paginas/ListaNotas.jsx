import { obtenerNotas } from "../../../data/localst";
import NotaCard from "./utils/NotaCard";

function ListaNotas() {
  const nota = [];
  const usuario = true; // Simulación de usuario registrado

  if (usuario) {
    const notasPrivadas = obtenerNotas(false);
    const notasPublicas = obtenerNotas(true);
    nota.push(...notasPrivadas, ...notasPublicas);
  }
  if (!usuario) {
    const notasPublicas = obtenerNotas(true);
    nota.push(...notasPublicas);
  }

  // Si no hay notas privadas o publicas mostrar mensaje
  
  if (nota.length === 0) {
    return <p className="text-center mx-auto text-gray-900 dark:text-gray-200">No hay notas disponibles.</p>;
  }
  
  console.log("Notas obtenidas de localStorage (públicas):", nota);

  return (
    <div className="space-y-4">
      {nota.map((nota, idx) => (
        <NotaCard key={idx} {...nota} />
      ))}
    </div>
  );
}

export default ListaNotas;
