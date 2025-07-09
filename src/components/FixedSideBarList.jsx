import { useSelector } from "react-redux";
import TaskListItem from "./TaskListItem";
import ContextMenuWrapper from "./ContextMenuWrapper";

const FixedSideBarList = () => {
  const { taskList } = useSelector((state) => state.tasks);

  const fixedLists = taskList.filter((list) => list.taskListType === "fixed");

  return (
    <div className="mt-1 border-b border-b-gray-500 ">
      <ul className="py-2 [&>*]:hover:bg-neutral-900 [&>*]:hover:rounded-sm [&>*]:cursor-pointer [&>*]:text-sm">
        {fixedLists.map((list) => {
          return (
            <ContextMenuWrapper
              key={list.id}
              id={list.id}
              // items={items(list)}
              positionMode="smart"
            >
              <TaskListItem list={list} />
            </ContextMenuWrapper>
          );
        })}
      </ul>
    </div>
  );
};

export default FixedSideBarList;
