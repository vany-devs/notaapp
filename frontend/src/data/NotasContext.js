/* eslint-disable no-undef */
import { createContext, useEffect, useState } from "react";

export const NotasContext = createContext();

export function NotasProvider({ children }) {
  const [notasPublicas, setNotasPublicas] = useState(false);
  const [notasPrivadas, setNotasPrivadas] = useState(false);
  const [notaSeleccionada, setNotaSeleccionada] = useState(null);
  const usuario = true; // Simulación de usuario registrado

  // Cargar notas al iniciar
  useEffect(() => {
    // Valida si hay sesión activa
    if (!usuario) return;
    
    setNotasPublicas(obtenerNotasPublicas());
    setNotasPrivadas(obtenerNotasPrivadas());
  }, []);

  // Guardar nueva nota
  const guardarNota = (nota) => {
    const nueva = guardarNotaLocal(nota);
    if (nueva.publica) {
      setNotasPublicas((prev) => [...prev, nueva]);
    } else {
      setNotasPrivadas((prev) => [...prev, nueva]);
    }
  };

  // Actualizar una nota existente
  const actualizarNota = (notaActualizada) => {
    const lista = notaActualizada.publica ? notasPublicas : notasPrivadas;
    const actualizadas = lista.map((n) =>
      n.id === notaActualizada.id ? notaActualizada : n
    );

    if (notaActualizada.publica) {
      setNotasPublicas(actualizadas);
      localStorage.setItem("notas_publicas", JSON.stringify(actualizadas));
    } else {
      setNotasPrivadas(actualizadas);
      localStorage.setItem("notas_privadas", JSON.stringify(actualizadas));
    }
  };

  const eliminarNota = (id, publica) => {
    const lista = publica ? notasPublicas : notasPrivadas;
    const filtradas = lista.filter((n) => n.id !== id);

    if (publica) {
      setNotasPublicas(filtradas);
      localStorage.setItem("notas_publicas", JSON.stringify(filtradas));
    } else {
      setNotasPrivadas(filtradas);
      localStorage.setItem("notas_privadas", JSON.stringify(filtradas));
    }
  };

  return (
    <NotasContext.Provider
      value={{
        notasPublicas,
        notasPrivadas,
        notaSeleccionada,
        setNotaSeleccionada,
        guardarNota,
        actualizarNota,
        eliminarNota,
      }}
    >
      {children}
    </NotasContext.Provider>
  );
}
