import { useSelector } from "react-redux";

const TaskCount = ({ list }) => {
  const { taskList } = useSelector((state) => state.tasks);

  const tasks = taskList.find((l) => l.id === list.id).tasks;

  if (tasks.length === 0) return null;

  return (
    <p
      className="flex items-center justify-center 
                text-[10px] h-3 w-3 p-2 rounded-full 
                bg-neutral-700 text-white"
    >
      {tasks.length}
    </p>
  );
};

export default TaskCount;
