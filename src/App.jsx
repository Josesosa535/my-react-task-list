import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const miLocalStorage = localStorage.getItem("listaTareas");
  const estadoInicial = JSON.parse(miLocalStorage ? miLocalStorage : "[]");
  const [listaTareas, setListaTareas] = useState(estadoInicial);
  useEffect(() => {
    setListaTareas([...listaTareas]);
  }, []);

  return (
    <div className="App">
      <div className="tareas">
        <Header titulo={"Lista de Tareas"} />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let miTarea = { titulo, contenido };
            setListaTareas([...listaTareas, miTarea]);
            localStorage.setItem(
              "listaTareas",
              JSON.stringify([...listaTareas, miTarea])
            );
            setTitulo("");
            setContenido("");
          }}
        >
          <input
            placeholder="Escribir titlo"
            className="agregarTitulo"
            onChange={(e) => setTitulo(e.target.value)}
            value={titulo}
          />
          <input
            placeholder="escribir contenido"
            className="agregarContenido"
            onChange={(e) => setContenido(e.target.value)}
            value={contenido}
          />
          <button className="botonAgregar" type="submit">
            Agregar Tarea
          </button>
        </form>
        <TaskList lista={listaTareas} />
      </div>
    </div>
  );
}

export default App;
