import taskManagerPng from "../assets/task-manager.png";

const Header = () => {
  return (
    <div className="px-7 py-2.5 pt-3 flex justify-items-start items-center w-screen">
      <img className="h-6" src={taskManagerPng} alt="task-manager.gif" />
      <h1 className="px-2 font-bold">Task Manager</h1>
    </div>
  );
};

export default Header;
