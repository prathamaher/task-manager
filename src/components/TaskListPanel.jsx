import { useSelector } from "react-redux";
import { useMemo } from "react";
import TaskListPanelBG_BLUE from "../assets/taskListPanelBG_blue.svg";
import TaskListPanelBG_PINK from "../assets/taskListPanelBG_pink.svg";
import TaskListPanelBG_TEAL from "../assets/taskListPanelBG_teal.svg";
import TaskListPanelBG_VIOLET from "../assets/taskListPanelBG_violet.svg";
import CustomTaskListBG_RED from "../assets/customTaskListBG_red.svg";

import TaskInputForm from "./TaskInputForm";
import ScrollableDiv from "./ScrollableDiv";
import PanelHeader from "./PanelHeader";
import taskPanels from "../constants/taskPanels";

const panelStyles = {
  [taskPanels.MyDayTasksPanelId]: {
    color: "text-violet-300",
    background: TaskListPanelBG_VIOLET,
  },
  [taskPanels.ImportantTasksPanelId]: {
    color: "text-pink-300",
    background: TaskListPanelBG_PINK,
  },
  [taskPanels.PlannedTasksPanelId]: {
    color: "text-blue-300",
    background: TaskListPanelBG_BLUE,
  },
  [taskPanels.AllTasksPanelId]: {
    color: "text-teal-300",
    background: TaskListPanelBG_TEAL,
  },
  custom: {
    color: "text-red-300",
    background: CustomTaskListBG_RED,
  },
};

const TaskListPanel = () => {
  const { currentTaskPanelId, taskList } = useSelector((state) => state.tasks);

  const panelData = useMemo(() => {
    let currentTaskList = taskList.find(
      (list) => list.id === currentTaskPanelId
    );

    const { color, background } =
      panelStyles[currentTaskPanelId] || panelStyles.custom;

    return {
      tasks: currentTaskList?.tasks || [],
      color,
      background,
    };
  }, [taskList, currentTaskPanelId]);

  const { tasks, color, background } = panelData;

  return (
    <div
      className={`relative min-h-11/12 px-6 py-4 rounded overflow-hidden bg-neutral-900 ${color}`}
    >
      <PanelHeader />
      {tasks.length === 0 && (
        <div className="absolute inset-20 flex items-center justify-center rounded">
          <img
            className="w-1/5 opacity-80"
            src={background}
            alt={`Background for ${currentTaskPanelId}`}
          />
        </div>
      )}
      <ScrollableDiv height="61%" className="mt-12">
        <ul className="space-y-2 mb-4 px-3 text-white">
          {tasks.map((task) => (
            <li key={task.id} className="bg-neutral-800 p-2 rounded">
              {task.title}
            </li>
          ))}
        </ul>
      </ScrollableDiv>
      <div className="absolute inset-x-6 bottom-4">
        <TaskInputForm />
      </div>
    </div>
  );
};

export default TaskListPanel;
