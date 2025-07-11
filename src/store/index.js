import { configureStore } from "@reduxjs/toolkit";

import {
  tasksReducer,
  changePanel,
  addTaskList,
  addTasks,
  removeTasks,
  updateTaskListTitle,
  setTaskListEditing,
  removeTaskList,
  toggleTaskComplete,
} from "./slices/tasksSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export {
  store,
  updateTaskListTitle,
  setTaskListEditing,
  addTaskList,
  changePanel,
  addTasks,
  removeTasks,
  removeTaskList,
  toggleTaskComplete,
};
