import { useSelector, useDispatch } from "react-redux";
import { SunIcon, StarIcon, CalendarIcon, HomeIcon } from "./Icons";
import taskPanels from "../constants/taskPanels";
import TaskCount from "./TaskCount";
import { changePanel } from "../store";
const FixedSideBarList = () => {
  const {
    currentTaskPanel,
    allTasks,
    myDayTasks,
    importantTasks,
    plannedTasks,
  } = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const handleTaskListClick = (panel) => {
    dispatch(changePanel(panel));
  };

  return (
    <div className="mt-1 border-b border-b-gray-500 ">
      <ul className="py-2 [&>*]:hover:bg-neutral-900 [&>*]:hover:rounded-sm [&>*]:cursor-pointer [&>*]:text-sm">
        <li
          onClick={() => handleTaskListClick(taskPanels.MyDayTasksPanel)}
          className="flex justify-between items-center px-3 py-2"
        >
          <div className="flex justify-between items-center">
            <SunIcon className={"mr-2 text-violet-300"} />
            <p>My Day</p>
          </div>
          <TaskCount panel={taskPanels.MyDayTasksPanel} />
        </li>
        <li
          onClick={() => handleTaskListClick(taskPanels.ImportantTasksPanel)}
          className="flex justify-between items-center px-3 py-2"
        >
          <div className="flex justify-between items-center">
            <StarIcon className={"mr-2 text-pink-300"} />
            <p>Important</p>
          </div>
          <TaskCount panel={taskPanels.ImportantTasksPanel} />
        </li>
        <li
          onClick={() => handleTaskListClick(taskPanels.PlannedTasksPanel)}
          className="flex justify-between items-center px-3 py-2"
        >
          <div className="flex justify-between items-center">
            <CalendarIcon className={"mr-2 text-blue-300"} />
            <p>Planned</p>
          </div>
          <TaskCount panel={taskPanels.PlannedTasksPanel} />
        </li>
        <li
          onClick={() => handleTaskListClick(taskPanels.AllTasksPanel)}
          className="flex justify-between items-center px-3 py-2"
        >
          <div className="flex justify-between items-center">
            <HomeIcon className={"mr-2 text-teal-300"} />
            <p>All Tasks</p>
          </div>
          <TaskCount panel={taskPanels.AllTasksPanel} />
        </li>
      </ul>
    </div>
  );
};

export default FixedSideBarList;
