import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]); // Agrega la nueva tarea a la lista, con los ... tengo lo anterior
      setTask(""); // Limpia el input
    }
  };

  // Función para eliminar una tarea por índice
  const handleDeleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete); // Filtra la tarea a eliminar
    setTasks(updatedTasks); // Actualiza la lista de tareas
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="Ingresa una tarea"
        style={{ padding: "5px", width: "300px", marginRight: "10px" }}
      />
      <button onClick={handleAddTask} style={{ padding: "5px 10px" }}>
        Agregar
      </button>

      <ul style={{ marginTop: "20px" }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {task}
            <button
              onClick={() => handleDeleteTask(index)} // Llama a la función de eliminar con el índice de la tarea
              style={{ marginLeft: "10px", padding: "3px 6px" }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
