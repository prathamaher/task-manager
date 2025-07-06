import TaskListPanelBG_BLUE from "../assets/taskListPanelBG_blue.svg";
import TaskListPanelBG_PINK from "../assets/taskListPanelBG_pink.svg";
import TaskListPanelBG_TEAL from "../assets/taskListPanelBG_teal.svg";
import TaskListPanelBG_VIOLET from "../assets/taskListPanelBG_violet.svg";
import TaskInputForm from "./TaskInputForm";
import ScrollableDiv from "./ScrollableDiv";
import taskPanels from "../constants/taskPanels";
import { useSelector } from "react-redux";
import PanelHeader from "./PanelHeader";

const TaskListPanel = () => {
  const {
    currentTaskPanel,
    allTasks,
    myDayTasks,
    importantTasks,
    plannedTasks,
  } = useSelector((state) => state.tasks);

  const getPanelData = () => {
    switch (currentTaskPanel) {
      case taskPanels.MyDayTasksPanel:
        return {
          tasks: myDayTasks,
          color: "violet-300",
          TaskListPanelBG: TaskListPanelBG_VIOLET,
        };
      case taskPanels.ImportantTasksPanel:
        return {
          tasks: importantTasks,
          color: "pink-300",
          TaskListPanelBG: TaskListPanelBG_PINK,
        };
      case taskPanels.PlannedTasksPanel:
        return {
          tasks: plannedTasks,
          color: "blue-300",
          TaskListPanelBG: TaskListPanelBG_BLUE,
        };
      case taskPanels.AllTasksPanel:
        return {
          tasks: allTasks,
          color: "teal-300",
          TaskListPanelBG: TaskListPanelBG_TEAL,
        };
      default:
        return { tasks: [], color: "", TaskListPanelBG: null };
    }
  };

  const { tasks, color, TaskListPanelBG } = getPanelData();

  return (
    <div
      className={`relative min-h-11/12 px-6 py-4 rounded overflow-hidden bg-neutral-900 text-${color}`}
    >
      <PanelHeader />
      {tasks.length === 0 && (
        <div className="absolute inset-20 flex items-center justify-center rounded">
          <img
            className="w-1/5 opacity-80"
            src={TaskListPanelBG}
            alt="Task Panel Background"
          />
        </div>
      )}
      <ScrollableDiv height="61%" className="mt-12">
        <ul className="space-y-2 mb-4 px-3 text-white">
          {tasks.map((task, index) => (
            <li key={index} className="bg-neutral-800 p-2 rounded">
              {task}
            </li>
          ))}
        </ul>
      </ScrollableDiv>
      <div className="absolute inset-x-6 bottom-4">
        <TaskInputForm color={color} />
      </div>
    </div>
  );
};

export default TaskListPanel;
