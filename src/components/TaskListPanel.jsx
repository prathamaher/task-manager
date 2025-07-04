import TaskListPanelBG from "../assets/taskListPanelBG.svg";
const TaskListPanel = () => {
  return (
    <div className="flex items-center justify-center bg-gray-800 rounded">
      <img className="w-1/5" src={TaskListPanelBG} alt="" />
    </div>
  );
};

export default TaskListPanel;
