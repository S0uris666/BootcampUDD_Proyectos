import React from 'react';
import TaskList from './components/TaskList';

const App = () => {
  const tareasIniciales = [
    { id: 1, nombre: 'Estudiar React', completada: false },
    { id: 2, nombre: 'Hacer ejercicio', completada: true },
  ];

  return (
    <div>
      <h1>Mi lista de tareas</h1>
      <TaskList tareasIniciales={tareasIniciales} />
    </div>
  );
};

export default App;