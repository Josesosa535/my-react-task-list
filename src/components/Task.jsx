/* eslint-disable react/prop-types */
import { BsFillTrashFill } from "react-icons/bs";
import { SiJavascript } from "react-icons/si";
function Task(props) {
  // eslint-disable-next-line react/prop-types
  const { tarea } = props;
  return (
    <li>
      <p>{tarea.titulo}</p>
      <p>{tarea.contenido}</p>
      <BsFillTrashFill />
      <SiJavascript />
    </li>
  );
}

export default Task;
