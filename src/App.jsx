/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { TaskModel } from "./models/task.model";

function App() {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const miLocalStorage = localStorage.getItem("listaTareas");
  const estadoInicial = JSON.parse(miLocalStorage ? miLocalStorage : "[]");
  const [listaTareas, setListaTareas] = useState(estadoInicial);

  const addTask = (e) => {
    e.preventDefault();
    let miTarea = new TaskModel(listaTareas.length, titulo, contenido, false);
    setListaTareas([...listaTareas, miTarea]);
    localStorage.setItem(
      "listaTareas",
      JSON.stringify([...listaTareas, miTarea])
    );
    setTitulo("");
    setContenido("");
  };

  const handleDelete = (id) => {
    const modifiedState = listaTareas.filter((tarea) => tarea.id !== id);
    setListaTareas([...modifiedState]);
    localStorage.setItem("listaTareas", JSON.stringify([...modifiedState]));
  };

  const handleEdit = (modifiedTask) => {
    const modifiedState = listaTareas.map((tarea) => {
      if (tarea.id == modifiedTask.id) {
        return {
          ...tarea,
          titulo: modifiedTask.titulo,
          contenido: modifiedTask.contenido,
        };
      } else {
        return tarea;
      }
    });
    setListaTareas([...modifiedState]);
    localStorage.setItem("listaTareas", JSON.stringify([...modifiedState]));
  };

  useEffect(() => {
    setListaTareas([...listaTareas]);
  }, []);
  return (
    <div className="App">
      <div className="tareas">
        <Header titulo={"Lista de Tareas"} />
        <form className="formulario" onSubmit={addTask}>
          <input
            placeholder="Escribir titulo"
            className="agregarTitulo"
            onChange={(e) => setTitulo(e.target.value)}
            value={titulo}
          />
          <input
            placeholder="Escribir descripción"
            className="agregarContenido"
            onChange={(e) => setContenido(e.target.value)}
            value={contenido}
          />
          <br />
          <button className="botonAgregar" type="submit">
            Agregar Tarea
          </button>
        </form>
        <TaskList
          onDelete={handleDelete}
          onEdit={handleEdit}
          lista={listaTareas}
        />
      </div>
    </div>
  );
}

export default App;
