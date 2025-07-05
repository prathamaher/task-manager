import { createSlice } from "@reduxjs/toolkit";

const taskPanels = {
  MyDayTasksPanel: "MyDayPanel",
  ImportantTasksPanel: "ImportantTasksPanel",
  PlannedTasksPanel: "PlannedTasksPanel",
  AllTasksPanel: "AllTasksPanel",
};

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
      if (state.currentTaskPanel === taskPanels.AllTasksPanel) {
        state.allTasks.unshift(action.payload);
      } else if (state.currentTaskPanel === taskPanels.MyDayTasksPanel) {
        state.myDayTasks.unshift(action.payload);
      } else if (state.currentTaskPanel === taskPanels.ImportantTasksPanel) {
        state.importantTasks.unshift(action.payload);
      } else {
        state.plannedTasks.unshift(action.payload);
      }
    },
    removeTasks(state, action) {
      const taskIdToRemove = action.payload;

      state.allTasks = state.allTasks.filter(
        (task) => task.id !== taskIdToRemove
      );
      state.myDayTasks = state.myDayTasks.filter(
        (task) => task.id !== taskIdToRemove
      );
      state.importantTasks = state.importantTasks.filter(
        (task) => task.id !== taskIdToRemove
      );
      state.plannedTasks = state.plannedTasks.filter(
        (task) => task.id !== taskIdToRemove
      );
    },
  },
});

export default taskPanels;

export const { changePanel, addTasks, removeTasks } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
