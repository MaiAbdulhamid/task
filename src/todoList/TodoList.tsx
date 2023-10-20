import React from "react";
import { useSelector } from "react-redux";

import { Todo } from "./Todo";
import { AddTodo } from "./AddTodo";
import { SingleTodoProps } from "./types";

function TodoList() {
  const todos = useSelector((state: any) => state.todos.todos);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-auto">
      <AddTodo />
      {todos && (
        <ul className="flex flex-col list-none p-0">
          {todos.map((todo: SingleTodoProps) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
      {todos.length === 0 && <p>No Todos</p>}
      {todos?.loading && (
        <div>
          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
          Processing...
        </div>
      )}
      {todos?.error && (
        <div className="text-red-500">
          Error loading todo List: {todos.error.message}
        </div>
      )}
    </div>
  );
}

export default TodoList;
