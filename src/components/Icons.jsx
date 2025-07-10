import { BsSun, BsCalendar2Event } from "react-icons/bs";
import { AiFillStar, AiFillHome, AiOutlinePlus } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";
import { IoAlarmOutline } from "react-icons/io5";
import { TbCalendarRepeat } from "react-icons/tb";

const SunIcon = ({ className }) => <BsSun className={className} />;
const StarIcon = ({ className }) => <AiFillStar className={className} />;
const CalendarIcon = ({ className }) => (
  <BsCalendar2Event className={className} />
);
const HomeIcon = ({ className }) => <AiFillHome className={className} />;
const PlusIcon = ({ className }) => <AiOutlinePlus className={className} />;
const EnvelopeIcon = ({ className }) => <HiOutlineMail className={className} />;
const HamburgerMenuIcon = ({ className }) => (
  <RxHamburgerMenu className={className} />
);
const SearchIcon = ({ className }) => (
  <FiSearch className={`w-3.5 h-3.5 ${className}`} />
);

const RadioButtonChecked = ({ className }) => (
  <FaRegCheckCircle className={className} />
);
const RadioButtonUnChecked = ({ className }) => (
  <FaRegCircle className={className} />
);

const DatePickerIcon = ({ className }) => (
  <IoCalendarOutline className={className} />
);

const AlarmClockIcon = ({ className }) => (
  <IoAlarmOutline className={className} />
);

const CalendarRepeatIcon = ({ className }) => (
  <TbCalendarRepeat className={className} />
);

export {
  SunIcon,
  StarIcon,
  CalendarIcon,
  HomeIcon,
  PlusIcon,
  EnvelopeIcon,
  HamburgerMenuIcon,
  SearchIcon,
  RadioButtonChecked,
  RadioButtonUnChecked,
  DatePickerIcon,
  AlarmClockIcon,
  CalendarRepeatIcon,
};
