import { useContext } from "react";
import { TodoContext, TTodo } from "../../context/TodoProvider";

/* type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
}; */
const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  return (
    <div>
      {state.map((todo: TTodo) => (
        <p
          key={todo.id}
          className={`cursor-pointer ${
            todo.isCompleted ? "line-through" : undefined
          }`}
          onClick={() => dispatch({ type: "taskComplete", payload: todo.id })}
        >
          {todo.title}
        </p>
      ))}
    </div>
  );
};

export default TodoList;
