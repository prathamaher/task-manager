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
    currentTaskPanelId: taskPanels.MyDayTasksPanelId,
    taskList: [
      {
        id: taskPanels.MyDayTasksPanelId,
        taskListTitle: "My Day",
        taskListType: "fixed",
        tasks: [],
        isEditing: false,
      },
      {
        id: taskPanels.ImportantTasksPanelId,
        taskListTitle: "Important",
        taskListType: "fixed",
        tasks: [],
        isEditing: false,
      },
      {
        id: taskPanels.PlannedTasksPanelId,
        taskListTitle: "Planned",
        taskListType: "fixed",
        tasks: [],
        isEditing: false,
      },
      {
        id: taskPanels.AllTasksPanelId,
        taskListTitle: "All Tasks",
        taskListType: "fixed",
        tasks: [],
        isEditing: false,
      },
    ],
  },
  reducers: {
    addTaskList(state, action) {
      let { listType, listTitle } = action.payload;

      const baseTitle = (listTitle || "Untitled List").trim();
      const finalTitle = generateUniqueTitle(baseTitle, null, state.taskList);

      const customTaskListPanelId = nanoid();

      //storing the new panel for tasklist in taskpanels
      taskPanels[customTaskListPanelId] = customTaskListPanelId;

      state.taskList.push({
        id: customTaskListPanelId,
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
      console.log("from slice : ", action.payload);
      state.currentTaskPanelId = action.payload;
    },

    addTasks(state, action) {
      const taskList = state.taskList.find(
        (list) => list.id === state.currentTaskPanelId
      );

      if (!taskList) return;

      const title =
        typeof action.payload === "string"
          ? action.payload
          : action.payload.title;

      const newTask = {
        id: nanoid(),
        title: title,
        description: "",
        completed: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        dueDate: null,
        reminder: null,
        repeat: "none",
        priority: "low",
        isMyDay: false,
        isImportant: false,
        isPlanned: false,
        labels: [],
        taskListId: taskList.id,
        notes: "",
        subtasks: [],
        attachments: [],
        color: "", // You can choose to inherit the list color if you want
        position: taskList.tasks.length + 1,
      };

      taskList.tasks.unshift(newTask);
    },

    removeTaskList(state, action) {
      const { id } = action.payload;

      // Remove the panel from taskPanels (if it's a custom list)
      delete taskPanels[id];

      // Check if the deleted list is the current panel
      const isCurrentPanel = state.currentTaskPanelId === id;

      // Get index of the deleted list BEFORE removing it
      const currentIndex = state.taskList.findIndex((list) => list.id === id);

      // Remove the task list
      state.taskList = state.taskList.filter((list) => list.id !== id);

      if (isCurrentPanel) {
        // Try previous task list (if exists and is not fixed)
        const previous = state.taskList[currentIndex - 1];

        if (previous && previous.taskListType !== "fixed") {
          state.currentTaskPanelId = previous.id;
        } else {
          // Otherwise fallback to All Tasks
          state.currentTaskPanelId = taskPanels.AllTasksPanelId;
        }
      }
    },

    removeTasks(state, action) {
      // const { id } = action.payload;

      // for (const list of state.taskList) {
      //   console.log("list name : ",list.taskListTitle)
      //   list.tasks = list.tasks.filter((task) => task.id !== id);
      // }

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
  removeTaskList,
} = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
