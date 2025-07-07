// import { useSelector } from "react-redux";
// import taskPanels from "../constants/taskPanels";

// const TaskCount = () => {
//   const {
//     currentTaskPanel,
//     allTasks,
//     myDayTasks,
//     importantTasks,
//     plannedTasks,
//   } = useSelector((state) => state.tasks);

//   const getPanelData = () => {
//     switch (currentTaskPanel) {
//       case taskPanels.MyDayTasksPanel:
//         return {
//           tasks: myDayTasks,
//         };
//       case taskPanels.ImportantTasksPanel:
//         return {
//           tasks: importantTasks,
//         };
//       case taskPanels.PlannedTasksPanel:
//         return {
//           tasks: plannedTasks,
//         };
//       case taskPanels.AllTasksPanel:
//         return {
//           tasks: allTasks,
//         };
//       default:
//         return { tasks: [] };
//     }
//   };

//   const { tasks } = getPanelData();

//   return (
//     <p
//       className={`flex items-center justify-center
//             text-[11px] h-3 w-3 p-2 rounded-full bg-gray-900
//             ${tasks.length ? "" : "hidden"}`}
//     >
//       {tasks.length}
//     </p>
//   );
// };

// export default TaskCount;

import { useSelector } from "react-redux";
import taskPanels from "../constants/taskPanels";

const TaskCount = ({ panel }) => {
  const {
    currentTaskPanel,
    allTasks,
    myDayTasks,
    importantTasks,
    plannedTasks,
  } = useSelector((state) => state.tasks);

  // Get current panel's tasks directly
  const tasks = (() => {
    switch (panel) {
      case taskPanels.MyDayTasksPanel:
        return myDayTasks;
      case taskPanels.ImportantTasksPanel:
        return importantTasks;
      case taskPanels.PlannedTasksPanel:
        return plannedTasks;
      case taskPanels.AllTasksPanel:
        return allTasks;
      default:
        return [];
    }
  })();

  if (tasks.length === 0) return null;

  return (
    <p
      className="flex items-center justify-center 
                text-[11px] h-3 w-3 p-2 rounded-full 
                bg-gray-900 text-white"
    >
      {tasks.length}
    </p>
  );
};

export default TaskCount;
