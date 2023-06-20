/* eslint-disable react/prop-types */
import { FaEdit } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { useState } from "react";
import { TaskModel } from "../models/task.model";

function Task({ tarea, handleEdit, handleDelete }) {
  const [editMode, setEditMode] = useState(false);
  const [modified, setModified] = useState({
    titulo: tarea.titulo,
    contenido: tarea.contenido,
  });

  const onDelete = () => {
    handleDelete(tarea.id);
  };

  const onEdit = (e) => {
    e.preventDefault();
    const myNewTask = new TaskModel(
      tarea.id,
      modified.titulo,
      modified.contenido,
      tarea.state
    );
    handleEdit(myNewTask);
    setEditMode(false);
  };

  const miFormulario = (
    <form onSubmit={onEdit}>
      <input
        type="text"
        value={modified.titulo}
        onChange={(e) => setModified({ ...modified, titulo: e.target.value })}
      />
      <input
        type="text"
        value={modified.contenido}
        onChange={(e) =>
          setModified({ ...modified, contenido: e.target.value })
        }
      />
      <button type="submit">editar</button>
    </form>
  );

  console.log(modified);
  return (
    <li>
      {editMode ? (
        miFormulario
      ) : (
        <>
          <p>{tarea.titulo}</p>
          <p>{tarea.contenido}</p>
        </>
      )}
      <div className="iconos">
        <button onClick={onDelete} className="botonEliminar">
          <BsTrash />
        </button>
        <button onClick={() => setEditMode(!editMode)} className="botonEditar">
          <FaEdit />
        </button>
      </div>
    </li>
  );
}

export default Task;
