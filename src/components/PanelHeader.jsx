import { useSelector } from "react-redux";
import taskPanels from "../constants/taskPanels"; // make sure this path is correct
import {
  CalendarIcon,
  HamburgerMenuIcon,
  HomeIcon,
  StarIcon,
  SunIcon,
} from "./Icons";

const PanelHeader = () => {
  const { currentTaskPanel } = useSelector((state) => state.tasks);

  let panel = null;

  switch (currentTaskPanel) {
    case taskPanels.AllTasksPanel:
      panel = (
        <h3 className="text-2xl flex items-center gap-2 w-fit">
          <HomeIcon />
          <p>All Tasks</p>
        </h3>
      );
      break;
    case taskPanels.MyDayTasksPanel:
      panel = (
        <h3 className="text-2xl flex items-center gap-2 w-fit">
          <SunIcon />
          My Day
        </h3>
      );
      break;
    case taskPanels.ImportantTasksPanel:
      panel = (
        <h3 className="text-2xl flex items-center gap-2 w-fit">
          <StarIcon />
          Important
        </h3>
      );
      break;
    case taskPanels.PlannedTasksPanel:
      panel = (
        <h3 className="text-2xl flex items-center gap-2 w-fit">
          <CalendarIcon />
          Planned
        </h3>
      );
      break;
    default:
      panel = (
        <h3 className="text-2xl flex items-center gap-2 w-fit">
          <HamburgerMenuIcon />
          Tasks
        </h3>
      );
  }

  return <div>{panel}</div>;
};

export default PanelHeader;
