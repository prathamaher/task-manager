// import { useDispatch } from "react-redux";
// import TaskCount from "./TaskCount";
// import { useState, useEffect } from "react";
// import {
//   CalendarIcon,
//   HamburgerMenuIcon,
//   HomeIcon,
//   StarIcon,
//   SunIcon,
// } from "./Icons";
// import { updateTaskListTitle, setTaskListEditing, changePanel } from "../store";

// const TaskListItem = ({ list, ...rest }) => {
//   const dispatch = useDispatch();
//   const [editing, setEditing] = useState(list.isEditing ?? false);
//   const [inputValue, setInputValue] = useState(list.taskListTitle);

//   useEffect(() => {
//     if (list.isEditing) {
//       setEditing(true);
//       setInputValue(list.taskListTitle);
//     }
//   }, [list.isEditing, list.taskListTitle]);

//   const handleBlur = () => {
//     const trimmedValue = inputValue.trim();

//     // Exit editing if unchanged or empty
//     if (!trimmedValue || trimmedValue === list.taskListTitle) {
//       dispatch(setTaskListEditing({ id: list.id, isEditing: false }));
//       setEditing(false);
//       return;
//     }

//     dispatch(updateTaskListTitle({ id: list.id, newTitle: trimmedValue }));
//     dispatch(setTaskListEditing({ id: list.id, isEditing: false }));
//     setEditing(false);
//   };

//   const handleTaskListClick = () => {
//     dispatch(changePanel(list.id));
//   };

//   const isCustom = list.taskListType === "custom";
//   const icon = () => {
//     if (list.taskListTitle === "My Day") {
//       return <SunIcon className={"text-violet-300"} />;
//     } else if (list.taskListTitle === "Important") {
//       return <StarIcon className={"text-pink-300"} />;
//     } else if (list.taskListTitle === "Planned") {
//       return <CalendarIcon className={"text-blue-300"} />;
//     } else if (list.taskListTitle === "All Tasks") {
//       return <HomeIcon className={"text-teal-300"} />;
//     } else {
//       return <HamburgerMenuIcon className={"text-red-300"} />;
//     }
//   };

//   return (
//     <li
//       className="flex justify-between items-center px-3 py-2 hover:bg-neutral-900 rounded"
//       onClick={() => handleTaskListClick(list.id)}
//     >
//       <div className="flex items-center gap-2 flex-1">
//         {icon()}
//         {editing && isCustom ? (
//           <input
//             type="text"
//             className="border border-gray-500 text-sm rounded-sm
//               focus:ring-gray-300 focus:outline-none focus:border-gray-300 block w-full ps-1 p-0.5 bg-neutral-700
//               placeholder-gray-400 text-white"
//             value={inputValue}
//             autoFocus
//             onChange={(e) => setInputValue(e.target.value)}
//             onBlur={handleBlur}
//             onKeyDown={(e) => {
//               if (e.key === "Enter") e.target.blur();
//             }}
//           />
//         ) : (
//           <p className="cursor-pointer text-white flex-1 truncate">
//             {list.taskListTitle}
//           </p>
//         )}
//       </div>
//       <TaskCount list={list} />
//     </li>
//   );
// };

// export default TaskListItem;

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import {
  CalendarIcon,
  HamburgerMenuIcon,
  HomeIcon,
  StarIcon,
  SunIcon,
} from "./Icons";
import TaskCount from "./TaskCount";
import { updateTaskListTitle, setTaskListEditing, changePanel } from "../store";

const iconMap = {
  myDayTasks: <SunIcon className="text-violet-300" />,
  importantTasks: <StarIcon className="text-pink-300" />,
  plannedTasks: <CalendarIcon className="text-blue-300" />,
  allTasks: <HomeIcon className="text-teal-300" />,
};

const TaskListItem = ({ list }) => {
  const { currentTaskPanelId } = useSelector((state) => state.tasks);

  const dispatch = useDispatch();
  const [editing, setEditing] = useState(list.isEditing ?? false);
  const [inputValue, setInputValue] = useState(list.taskListTitle);

  const isCustom = list.taskListType === "custom";
  const IconElement = iconMap[list.id] || (
    <HamburgerMenuIcon className="text-red-300" />
  );

  useEffect(() => {
    if (list.isEditing) {
      setEditing(true);
      setInputValue(list.taskListTitle);
    }
  }, [list.isEditing, list.taskListTitle]);

  const handleBlur = () => {
    const trimmed = inputValue.trim();
    if (!trimmed || trimmed === list.taskListTitle) {
      dispatch(setTaskListEditing({ id: list.id, isEditing: false }));
      setEditing(false);
      return;
    }
    dispatch(updateTaskListTitle({ id: list.id, newTitle: trimmed }));
    dispatch(setTaskListEditing({ id: list.id, isEditing: false }));
    setEditing(false);
  };

  const handleTaskListClick = useCallback(() => {
    dispatch(changePanel(list.id));
  }, [dispatch, list.id]);

  return (
    <li
      className={`flex justify-between items-center px-3 py-2 hover:bg-neutral-700 rounded ${
        list.id === currentTaskPanelId ? "bg-neutral-700" : ""
      }`}
      onClick={handleTaskListClick}
    >
      <div className="flex items-center gap-2 flex-1">
        {IconElement}
        {editing && isCustom ? (
          <input
            type="text"
            className="border border-gray-500 text-sm rounded-sm
              focus:ring-gray-300 focus:outline-none focus:border-gray-300 block w-full ps-1 p-0.5 bg-neutral-700
              placeholder-gray-400 text-white"
            value={inputValue}
            autoFocus
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={(e) => {
              if (e.key === "Enter") e.target.blur();
            }}
          />
        ) : (
          <p className="cursor-pointer text-white flex-1 truncate">
            {list.taskListTitle}
          </p>
        )}
      </div>
      <TaskCount list={list} />
    </li>
  );
};

export default TaskListItem;
