import Header from "./components/Header";
import SideBar from "./components/SideBar";
import TaskListPanel from "./components/TaskListPanel";
const App = () => {
  return (
    <div className="h-screen w-full bg-gray-900 text-white">
      <Header />
      <div className="grid grid-cols-[minmax(250px,1fr)_3fr] gap-2 p-2">
        <SideBar />
        <TaskListPanel />
      </div>
    </div>
  );
};

export default App;
