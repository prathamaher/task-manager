import { configureStore } from "@reduxjs/toolkit";

import { tasksReducer, addTasks, removeTasks } from "./slices/tasksSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export { store, addTasks, removeTasks };
