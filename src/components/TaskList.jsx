/* eslint-disable react/prop-types */
import Task from "./Task";

function TaskList(props) {
  const { lista } = props;

  return (
    <div>
      <ul>
        {lista.map((tarea, indice) => {
          return <Task tarea={tarea} key={indice}></Task>;
        })}
      </ul>
    </div>
  );
}

export default TaskList;
