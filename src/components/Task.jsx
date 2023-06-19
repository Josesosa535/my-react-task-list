/* eslint-disable react/prop-types */
import { FaEdit } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";

function Task(props) {
  // eslint-disable-next-line react/prop-types
  const { tarea } = props;
  return (
    <li>
      <p>{tarea.titulo}</p>
      <p>{tarea.contenido}</p>
      <div className="iconos">
        <button className="botonEliminar">
          <BsTrash />
        </button>
        <button className="botonEditar">
          <FaEdit />
        </button>
      </div>
    </li>
  );
}

export default Task;
