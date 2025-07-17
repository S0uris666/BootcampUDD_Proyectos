import React, { useState } from 'react';

const TaskList = ({ tareasIniciales }) => {
  const [tareas, setTareas] = useState(tareasIniciales);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim() === '') return;
    const nueva = {
      id: Date.now(),
      nombre: nuevaTarea,
      completada: false,
    };
    setTareas([...tareas, nueva]);
    setNuevaTarea('');
    console.log('Tarea agregada:', nueva);
  };

  const eliminarTarea = (id) => {
    const nuevasTareas = tareas.filter((t) => t.id !== id);
    setTareas(nuevasTareas);
    console.log('Tarea eliminada con id:', id);
  };

  const marcarCompletada = (id) => {
    const actualizadas = tareas.map((t) =>
      t.id === id ? { ...t, completada: !t.completada } : t
    );
    setTareas(actualizadas);
    console.log('Tareas actualizadas:', actualizadas);
  };

  return (
    <div>
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            <span style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
              {tarea.nombre}
            </span>
            <button onClick={() => marcarCompletada(tarea.id)}>
              {tarea.completada ? 'Desmarcar' : 'Completar'}
            </button>
            <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={agregarTarea}>Agregar tarea</button>
    </div>
  );
};

export default TaskList;