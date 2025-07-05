import { useSelector, useDispatch } from "react-redux";
import { SunIcon, StarIcon, CalendarIcon, HomeIcon } from "./Icons";
import { changePanel } from "../store/slices/tasksSlice";
import taskPanels from "../constants/taskPanels";
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
      <ul className="py-2 [&>*]:hover:bg-gray-900 [&>*]:hover:rounded-sm [&>*]:cursor-pointer">
        <li
          onClick={() => handleTaskListClick(taskPanels.MyDayTasksPanel)}
          className="flex justify-between items-center px-3 py-2"
        >
          <div className="flex justify-between items-center">
            <SunIcon className={"mr-2"} />
            <p>My Day</p>
          </div>
          <p
            className={`flex items-center justify-center 
            text-[11px] h-3 w-3 p-2 rounded-full bg-gray-900
            ${myDayTasks.length ? "" : "hidden"}`}
          >
            {myDayTasks.length}
          </p>
        </li>
        <li
          onClick={() => handleTaskListClick(taskPanels.ImportantTasksPanel)}
          className="flex justify-between items-center px-3 py-2"
        >
          <div className="flex justify-between items-center">
            <StarIcon className={"mr-2"} />
            <p>Important</p>
          </div>
          <p
            className={`flex items-center justify-center 
            text-[11px] h-3 w-3 p-2 rounded-full bg-gray-900
            ${importantTasks.length ? "" : "hidden"}`}
          >
            {importantTasks.length}
          </p>{" "}
        </li>
        <li
          onClick={() => handleTaskListClick(taskPanels.PlannedTasksPanel)}
          className="flex justify-between items-center px-3 py-2"
        >
          <div className="flex justify-between items-center">
            <CalendarIcon className={"mr-2"} />
            <p>Planned</p>
          </div>
          <p
            className={`flex items-center justify-center 
            text-[11px] h-3 w-3 p-2 rounded-full bg-gray-900
            ${plannedTasks.length ? "" : "hidden"}`}
          >
            {plannedTasks.length}
          </p>{" "}
        </li>
        <li
          onClick={() => handleTaskListClick(taskPanels.AllTasksPanel)}
          className="flex justify-between items-center px-3 py-2"
        >
          <div className="flex justify-between items-center">
            <HomeIcon className={"mr-2"} />
            <p>All Tasks</p>
          </div>
          <p
            className={`flex items-center justify-center 
            text-[11px] h-3 w-3 p-2 rounded-full bg-gray-900
            ${allTasks.length ? "" : "hidden"}`}
          >
            {allTasks.length}
          </p>{" "}
        </li>
      </ul>
    </div>
  );
};

export default FixedSideBarList;
