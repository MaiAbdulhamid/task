import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./auth.slice";
import { todosReducer } from "./todos.slice";

export * from "./auth.slice";
export * from "./todos.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todosReducer,
  },
});
