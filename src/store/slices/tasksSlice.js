import { createSlice } from "@reduxjs/toolkit";
import taskPanels from "../../constants/taskPanels";
const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    currentTaskPanel: taskPanels.MyDayTasksPanel,
    myDayTasks: [],
    importantTasks: [],
    plannedTasks: [],
    allTasks: [],
  },
  reducers: {
    changePanel(state, action) {
      state.currentTaskPanel = action.payload;
    },

    addTasks(state, action) {
      switch (state.currentTaskPanel) {
        case taskPanels.AllTasksPanel:
          state.allTasks.unshift(action.payload);
          break;
        case taskPanels.MyDayTasksPanel:
          state.myDayTasks.unshift(action.payload);
          break;
        case taskPanels.ImportantTasksPanel:
          state.importantTasks.unshift(action.payload);
          break;
        case taskPanels.PlannedTasksPanel:
        default:
          state.plannedTasks.unshift(action.payload);
          break;
      }
    },

    removeTasks(state, action) {
      const idToRemove = action.payload;
      const keys = ["allTasks", "myDayTasks", "importantTasks", "plannedTasks"];
      for (const key of keys) {
        state[key] = state[key].filter((task) => task.id !== idToRemove);
      }
    },
  },
});

export const { changePanel, addTasks, removeTasks } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
