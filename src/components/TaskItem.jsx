import { useDispatch } from "react-redux";
import { RadioButtonChecked, RadioButtonUnChecked } from "./Icons";
import { toggleTaskComplete } from "../store";
import { useState } from "react";

const TaskItem = ({ task }) => {
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();

  const handleIconClick = () => {
    dispatch(
      toggleTaskComplete({ taskListId: task.taskListId, taskId: task.id })
    );
  };

  const renderIcon = () => {
    if (hovered || task.completed) return <RadioButtonChecked />;
    return <RadioButtonUnChecked />;
  };

  return (
    <li className="relative bg-neutral-800 p-2 rounded">
      <button
        type="button"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleIconClick}
        className="h-fit w-fit absolute inset-y-0 start-0 flex items-center ml-3 my-auto"
      >
        {renderIcon()}
      </button>
      <p
        className={`ps-8 ${
          task.completed ? "line-through text-gray-400" : "text-white"
        }`}
      >
        {task.title}
      </p>
    </li>
  );
};

export default TaskItem;
