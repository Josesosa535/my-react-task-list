/* eslint-disable react/prop-types */
import Task from "./Task";

function TaskList(props) {
  const { lista, onEdit, onDelete } = props;

  return (
    <div>
      <ul>
        {lista.map((tarea, indice) => {
          return (
            <Task
              handleDelete={onDelete}
              handleEdit={onEdit}
              tarea={tarea}
              key={indice}
            ></Task>
          );
        })}
      </ul>
    </div>
  );
}

export default TaskList;
