import { createSlice, nanoid } from "@reduxjs/toolkit";
import taskPanels from "../../constants/taskPanels";

function generateUniqueTitle(baseTitle, excludeId, taskList) {
  const titleSet = new Set(
    taskList
      .filter((list) => list.id !== excludeId)
      .map((list) => list.taskListTitle)
  );

  if (!titleSet.has(baseTitle)) return baseTitle;

  let counter = 1;
  while (titleSet.has(`${baseTitle} (${counter})`)) {
    counter++;
  }
  return `${baseTitle} (${counter})`;
}

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    currentTaskPanel: taskPanels.MyDayTasksPanel,
    myDayTasks: [],
    importantTasks: [],
    plannedTasks: [],
    allTasks: [],
    taskList: [],
  },
  reducers: {
    addTaskList(state, action) {
      let { listType, listTitle } = action.payload;

      const baseTitle = (listTitle || "Untitled List").trim();
      const finalTitle = generateUniqueTitle(baseTitle, null, state.taskList);

      state.taskList.push({
        id: nanoid(),
        taskListTitle: finalTitle,
        taskListType: listType,
        tasks: [],
        isEditing: true,
      });
    },

    updateTaskListTitle(state, action) {
      const { id, newTitle } = action.payload;

      const trimmed = newTitle.trim();
      if (!trimmed) return;

      const finalTitle = generateUniqueTitle(trimmed, id, state.taskList);

      const list = state.taskList.find((taskList) => taskList.id === id);
      if (list) {
        list.taskListTitle = finalTitle;
      }
    },

    setTaskListEditing(state, action) {
      const { id, isEditing } = action.payload;
      const list = state.taskList.find((taskList) => taskList.id === id);
      if (list) {
        list.isEditing = isEditing;
      }
    },

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

export const {
  addTaskList,
  updateTaskListTitle,
  setTaskListEditing,
  changePanel,
  addTasks,
  removeTasks,
} = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
