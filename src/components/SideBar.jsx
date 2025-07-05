import SearchBar from "./SearchBar";
import UserAccount from "./UserAccount";
import CustomSideBarList from "./CustomSideBarList";
import FixedSideBarList from "./FixedSideBarList";

const SideBar = () => {
  return (
    <div className="px-3">
      {/* desktop menu */}
      <UserAccount />
      <SearchBar />
      <FixedSideBarList />
      <CustomSideBarList />
    </div>
  );
};

export default SideBar;
