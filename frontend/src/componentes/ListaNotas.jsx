import NotaCard from "./NotaCard";

function ListaNotas() {
  const notas = [
    {
        titulo: "Seguimiento Tareas Pendientes",
        contenido: "Terminar el informe trimestral para el miércoles. Enviar el email de seguimiento al cliente B.",
        prioridad: "alta",
        publica: false,
        usuario: "Jefe_Proyecto",
        fechaCreacion: new Date("2025-10-16T11:20:00"),
        fechaActualizacion: new Date("2025-10-18T10:18:00"),
    },
    {
        titulo: "Receta Nueva: Pastel de Limón",
        contenido: "Ingredientes: 3 limones, 200g de azúcar, 4 huevos, harina. Buscar el video tutorial de la abuela.",
        prioridad: "media",
        publica: false,
        usuario: "Chef_Cocinas",
        fechaCreacion: new Date("2025-10-17T18:00:00"),
        fechaActualizacion: new Date("2025-10-18T10:19:00"),
    },
    {
        titulo: "Error Crítico en Producción",
        contenido: "El módulo de pagos está fallando después del último despliegue. Revertir y analizar logs urgente.",
        prioridad: "alta",
        publica: true,
        usuario: "Soporte_24h",
        fechaCreacion: new Date("2025-10-18T02:00:00"),
        fechaActualizacion: new Date("2025-10-18T10:20:00"),
    },
    {
        titulo: "Ideas para regalo de cumpleaños",
        contenido: "Un libro de ciencia ficción o una tarjeta de regalo para su tienda favorita.",
        prioridad: "baja",
        publica: false,
        usuario: "Amigo_Fiel",
        fechaCreacion: new Date("2025-10-01T09:00:00"),
        fechaActualizacion: new Date("2025-10-18T10:21:00"),
    },
    {
        titulo: "Documentación API v2",
        contenido: "Actualizar la sección de 'Endpoints de Autenticación'. Asegurarse de que los ejemplos de cURL sean correctos.",
        prioridad: "media",
        publica: true,
        usuario: "Vany-devs",
        fechaCreacion: new Date("2025-10-15T14:45:00"),
        fechaActualizacion: new Date("2025-10-18T10:22:00"),
    },
    {
        titulo: "Pensamientos Aleatorios",
        contenido: "Recordar la diferencia entre 'let', 'const' y 'var' en JavaScript. No olvidar llamar a María.",
        prioridad: "baja",
        publica: false,
        usuario: null, // Nota personal no publicada
        fechaCreacion: new Date("2025-10-18T07:15:00"),
        fechaActualizacion: new Date("2025-10-18T10:23:00"),
    },
    {
        titulo: "Reunión de Marketing",
        contenido: "Discutir la nueva campaña de redes sociales. Revisar el presupuesto para el Q4. Hora: 14:00.",
        prioridad: "alta",
        publica: true,
        usuario: "Equipo_MKT",
        fechaCreacion: new Date("2025-10-18T09:10:00"),
        fechaActualizacion: new Date("2025-10-18T10:24:00"),
    },
    {
        titulo: "Configuración Base de Datos",
        contenido: "Crear un índice en la columna 'producto_id' para mejorar el rendimiento de las consultas.",
        prioridad: "media",
        publica: true,
        usuario: null, // Configuración técnica compartida
        fechaCreacion: new Date("2025-10-17T20:30:00"),
        fechaActualizacion: new Date("2025-10-18T10:25:00"),
    },
    {
        titulo: "Próximo Viaje",
        contenido: "Buscar vuelos a Nueva York para diciembre. Reservar hotel cerca de Central Park.",
        prioridad: "baja",
        publica: false,
        usuario: "Viajero_Entusiasta",
        fechaCreacion: new Date("2025-09-01T12:00:00"),
        fechaActualizacion: new Date("2025-10-18T10:26:00"),
    },
    {
        titulo: "Anotaciones de Clases",
        contenido: "La fórmula de la relatividad especial es $E=mc^2$. Revisar el capítulo 3 de Física Cuántica.",
        prioridad: "media",
        publica: false,
        usuario: "Estudiante_Aplicado",
        fechaCreacion: new Date("2025-10-17T19:00:00"),
        fechaActualizacion: new Date("2025-10-18T10:27:00"),
    },
];

  return (
    <div className="space-y-4">
      {notas.map((nota, idx) => (
        <NotaCard key={idx} {...nota} />
      ))}
    </div>
  );
}

export default ListaNotas;
