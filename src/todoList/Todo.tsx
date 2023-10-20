import { useRef } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../store";
import { TodoProps } from "./types";

function Todo({ todo }: TodoProps) {
  const inputRef = useRef<any>();
  const dispatch = useDispatch();

  const deleteTodoHandler = (id: any) => {
    dispatch(todoActions.removeTodo(id));
  };

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  const update = () => {
    dispatch(
      todoActions.updateTodo({
        id: todo.id,
        task: inputRef.current.value,
      } as any)
    );
    // inputRef.current.disabled = true;
  };

  return (
    <li className="p-3 m-3 border-none">
      <input
        ref={inputRef}
        type="text"
        name="task"
        defaultValue={todo.task}
        disabled={inputRef as any}
        onChange={() => update()}
      />
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded border-none mt-2 mb-2" onClick={changeFocus}>Edit</button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded border-none mt-2 mb-2" onClick={() => deleteTodoHandler(todo.id)}>
        Delete
      </button>
    </li>
  );
}

export { Todo };
