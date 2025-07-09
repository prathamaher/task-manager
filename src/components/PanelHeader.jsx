import { useSelector } from "react-redux";
import taskPanels from "../constants/taskPanels";
import {
  CalendarIcon,
  HamburgerMenuIcon,
  HomeIcon,
  StarIcon,
  SunIcon,
} from "./Icons";

const PanelHeader = () => {
  const { currentTaskPanelId, taskList } = useSelector((state) => state.tasks);

  const panelIcons = {
    [taskPanels.MyDayTasksPanelId]: <SunIcon />,
    [taskPanels.ImportantTasksPanelId]: <StarIcon />,
    [taskPanels.PlannedTasksPanelId]: <CalendarIcon />,
    [taskPanels.AllTasksPanelId]: <HomeIcon />,
  };

  const getPanelData = () => {
    const currentTaskList = taskList.find(
      (list) => list.id === currentTaskPanelId
    );

    const icon = panelIcons[currentTaskPanelId] || <HamburgerMenuIcon />;

    return {
      icon,
      taskListTitle: currentTaskList?.taskListTitle || "",
    };
  };

  const { icon, taskListTitle } = getPanelData();

  const panel = (
    <h3 className="text-2xl flex items-center gap-2 w-fit">
      {icon}
      {taskListTitle}
    </h3>
  );

  return <div>{panel}</div>;
};

export default PanelHeader;
