import TaskListPanelBG_BLUE from "../assets/taskListPanelBG_blue.svg";
import TaskListPanelBG_PINK from "../assets/taskListPanelBG_pink.svg";
import TaskListPanelBG_TEAL from "../assets/taskListPanelBG_teal.svg";
import TaskListPanelBG_VIOLET from "../assets/taskListPanelBG_violet.svg";
import CustomTaskListBG_RED from "../assets/customTaskListBG_red.svg";
import TaskInputForm from "./TaskInputForm";
import ScrollableDiv from "./ScrollableDiv";
import taskPanels from "../constants/taskPanels";
import { useSelector } from "react-redux";
import PanelHeader from "./PanelHeader";

const TaskListPanel = () => {
  const { currentTaskPanelId, taskList } = useSelector((state) => state.tasks);

  const getPanelData = () => {
    let color = null;
    let TaskListPanelBG = null;

    const currentTaskList = taskList.find((list, index) => {
      return list.id === currentTaskPanelId;
    });

    if (currentTaskPanelId === taskPanels.MyDayTasksPanelId) {
      color = "violet-300";
      TaskListPanelBG = TaskListPanelBG_VIOLET;
    } else if (currentTaskPanelId === taskPanels.ImportantTasksPanelId) {
      color = "pink-300";
      TaskListPanelBG = TaskListPanelBG_PINK;
    } else if (currentTaskPanelId === taskPanels.PlannedTasksPanelId) {
      color = "blue-300";
      TaskListPanelBG = TaskListPanelBG_BLUE;
    } else if (currentTaskPanelId === taskPanels.AllTasksPanelId) {
      color = "teal-300";
      TaskListPanelBG = TaskListPanelBG_TEAL;
    } else {
      color = "red-300";
      TaskListPanelBG = CustomTaskListBG_RED;
    }

    return {
      tasks: currentTaskList.tasks,
      color: color,
      TaskListPanelBG: TaskListPanelBG,
    };
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
