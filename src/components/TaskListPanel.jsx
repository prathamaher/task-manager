import TaskListPanelBG from "../assets/taskListPanelBG.svg";
import TaskInputForm from "./TaskInputForm";
import ScrollableDiv from "./ScrollableDiv";
import taskPanels from "../constants/taskPanels";
import { useSelector } from "react-redux";

const TaskListPanel = () => {
  const {
    currentTaskPanel,
    allTasks,
    myDayTasks,
    importantTasks,
    plannedTasks,
  } = useSelector((state) => state.tasks);

  // const cState = useSelector((state) => state.tasks);
  // console.log(cState);

  const showPanel = () => {
    if (currentTaskPanel === taskPanels.AllTasksPanel) return allTasks;
    else if (currentTaskPanel === taskPanels.MyDayTasksPanel) return myDayTasks;
    else if (currentTaskPanel === taskPanels.ImportantTasksPanel)
      return importantTasks;
    else return plannedTasks;
  };

  const tasksToDisplay = showPanel();

  return (
    <div className="relative min-h-11/12 p-4 rounded overflow-hidden bg-gray-900">
      <div>
        <h1>{currentTaskPanel}</h1>
      </div>
      {/* Background Image */}
      {tasksToDisplay.length === 0 && (
        <div className="absolute inset-20 flex items-center justify-center bg-gray-900 rounded">
          <img
            className="w-1/5 opacity-80"
            src={TaskListPanelBG}
            alt="Task Panel Background"
          />
        </div>
      )}
      <ScrollableDiv height="61%" className="mt-12">
        {/* Task List */}
        <ul className="space-y-2 mb-4 px-3 text-white">
          {tasksToDisplay.map((task, index) => (
            <li key={index} className="bg-gray-800 p-2 rounded">
              {task}
            </li>
          ))}
        </ul>
      </ScrollableDiv>
      <div className="absolute inset-x-6 bottom-4">
        {/* Input Form */}
        <TaskInputForm />
      </div>
    </div>
  );
};

export default TaskListPanel;
