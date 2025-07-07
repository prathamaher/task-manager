import Header from "./components/Header";
import SideBar from "./components/SideBar";
import TaskListPanel from "./components/TaskListPanel";
const App = () => {
  return (
    <div className="h-screen w-full bg-neutral-800 text-white">
      <Header />
      <div className="h-11/12 grid grid-cols-[minmax(225px,1.1fr)_4fr] gap-3 p-2">
        <SideBar />
        <TaskListPanel />
      </div>
    </div>
  );
};

export default App;
