//import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
//import Task from "./components/Task";

function App() {
  let ListaTareas = [
    "Arreglar la cama",
    "Bañar al perro",
    "Lavar los platos",
    "Barrer la casa",
    "Limpiar la mesa",
  ];
  return (
    <div className="App">
      <div className="tareas">
        <Header titulo={"Lista de Tareas"} />
        <TaskList lista={ListaTareas} />
      </div>
    </div>
  );
}

export default App;
