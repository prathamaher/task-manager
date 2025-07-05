import ScrollableDiv from "./ScrollableDiv";
import { HamburgerMenuIcon, EnvelopeIcon, PlusIcon } from "./Icons";

const CustomSideBarList = () => {
  return (
    <div className="my-4">
      <ScrollableDiv height="130px">
        <ul className="py-2 [&>*]:hover:bg-gray-900 [&>*]:hover:rounded-sm [&>*]:cursor-pointer">
          <li className="flex justify-between items-center px-3 py-2">
            <div className="flex justify-between items-center">
              <HamburgerMenuIcon className={"mr-2"} />
              <p>My Day</p>
            </div>
            <p>total tasks</p>
          </li>
          <li className="flex justify-between items-center px-3 py-2">
            <div className="flex justify-between items-center">
              <HamburgerMenuIcon className={"mr-2"} />
              <p>Important</p>
            </div>
            <p>total tasks</p>
          </li>{" "}
          <li className="flex justify-between items-center px-3 py-2">
            <div className="flex justify-between items-center">
              <HamburgerMenuIcon className={"mr-2"} />
              <p>Important</p>
            </div>
            <p>total tasks</p>
          </li>{" "}
          <li className="flex justify-between items-center px-3 py-2">
            <div className="flex justify-between items-center">
              <HamburgerMenuIcon className={"mr-2"} />
              <p>Important</p>
            </div>
            <p>total tasks</p>
          </li>
        </ul>
      </ScrollableDiv>
      <div className="my-4 flex justify-between items-center [&>*]:hover:bg-gray-900 [&>*]:hover:rounded-sm">
        <button className="w-3/4 flex items-center py-2">
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
