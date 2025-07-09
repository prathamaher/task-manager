import ScrollableDiv from "./ScrollableDiv";
import { EnvelopeIcon, PlusIcon } from "./Icons";
import { useDispatch, useSelector } from "react-redux";
import { addTaskList, removeTaskList, setTaskListEditing } from "../store";
import TaskListItem from "./TaskListItem";
import ContextMenuWrapper from "./ContextMenuWrapper";

const CustomSideBarList = () => {
  const { taskList } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const addCustomTaskList = () => {
    dispatch(addTaskList({ listType: "custom" }));
  };

  // console.log(taskList);

  //filtering out customLists
  const customLists = taskList.filter((list) => list.taskListType === "custom");

  //contextmenu
  const items = (list) => {
    return [
      {
        label: "Rename",
        action: () => {
          dispatch(setTaskListEditing({ id: list.id, isEditing: true }));
        },
      },
      {
        label: "Delete",
        action: () => {
          dispatch(removeTaskList({ id: list.id }));
        },
      },
    ];
  };
  return (
    <div className="my-4">
      <ScrollableDiv height="130px">
        <ul className="py-2 [&>*]:hover:bg-neutral-900 [&>*]:hover:rounded-sm [&>*]:cursor-pointer [&>*]:text-sm">
          {customLists.map((list) => {
            return (
              <ContextMenuWrapper
                key={list.id}
                id={list.id}
                items={items(list)}
                positionMode="smart"
              >
                <TaskListItem list={list} />
              </ContextMenuWrapper>
            );
          })}
        </ul>
      </ScrollableDiv>
      <div className="my-4 flex justify-between items-center [&>*]:hover:bg-neutral-900 [&>*]:hover:rounded-sm">
        <button
          onClick={addCustomTaskList}
          className="w-3/4 flex items-center py-2"
        >
          <PlusIcon className="h-4 w-4 mx-3" />
          <p className="text-sm">New list</p>
        </button>
        <button className="p-2">
          <EnvelopeIcon />
        </button>
      </div>
    </div>
  );
};

export default CustomSideBarList;
