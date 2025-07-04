import { SunIcon, StarIcon, CalendarIcon, HomeIcon } from "./Icons";

const FixedSideBarList = () => {
  return (
    <div className=" border-b border-b-gray-500 ">
      <ul className="py-2 [&>*]:hover:bg-gray-800 [&>*]:hover:rounded-sm">
        <li className="flex justify-between items-center px-1 py-2">
          <div className="flex justify-between items-center">
            <SunIcon className={"mr-2"} />
            <p>My Day</p>
          </div>
          <p>total tasks</p>
        </li>
        <li className="flex justify-between items-center px-1 py-2">
          <div className="flex justify-between items-center">
            <StarIcon className={"mr-2"} />
            <p>Important</p>
          </div>
          <p>total tasks</p>
        </li>
        <li className="flex justify-between items-center px-1 py-2">
          <div className="flex justify-between items-center">
            <CalendarIcon className={"mr-2"} />
            <p>Planned</p>
          </div>
          <p>total tasks</p>
        </li>
        <li className="flex justify-between items-center px-1 py-2">
          <div className="flex justify-between items-center">
            <HomeIcon className={"mr-2"} />
            <p>All Tasks</p>
          </div>
          <p>total tasks</p>
        </li>
      </ul>
    </div>
  );
};

export default FixedSideBarList;
