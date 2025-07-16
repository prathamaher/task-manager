import { useEffect, useRef, useState } from "react";
import { addTasks } from "../store";
import { useDispatch, useSelector } from "react-redux";
import {
  AlarmClockIcon,
  CalendarRepeatIcon,
  DatePickerIcon,
  PlusIcon,
  RadioButtonUnChecked,
} from "./Icons";
import FloatingMenuWrapper from "./FloatingMenuWrapper";

const TaskInputForm = () => {
  const [input, setInput] = useState("");
  const [dueDate, setDueDate] = useState(null);

  const [focused, setFocused] = useState(false);
  const inputRef = useRef();

  const { currentTaskPanelId } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    setInput("");
    setFocused(false);
    inputRef.current?.focus();
  }, [currentTaskPanelId]);

  const submitInput = () => {
    if (!input.trim()) return;
    dispatch(addTasks(input));
    setInput("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitInput();
  };

  //for icon click-submit
  const handleIconClick = () => {
    submitInput();
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const placeholderText = focused
    ? "Try typing 'Pay utility bills by Friday 6pm"
    : "Add new task";

  const handleSetDueDate = (date) => {
    const today = new Date();

    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);

    const formatDate = (date) => date.toISOString().split("T")[0];
    switch (date) {
      case "Today":
        {
          setDueDate(formatDate(today));
        }
        break;
      case "Tomorrow":
        {
          setDueDate(formatDate(tomorrow));
        }
        break;
      case "Next Week":
        {
          setDueDate(formatDate(nextWeek));
        }
        break;
      case "Pick a date":
        {
          //
          setDueDate(null);
        }
        break;
    }
  };

  const datePickerItems = [
    { label: "Today", action: () => handleSetDueDate("Today") },
    { label: "Tomorrow", action: () => handleSetDueDate("Tomorrow") },
    { label: "Next Week", action: () => handleSetDueDate("Next Week") },
    { label: "Pick a date", action: () => handleSetDueDate("Pick a date") },
  ];

  const repeatItems = [
    { label: "Every day", action: () => console.log("Repeat: Daily") },
    { label: "Every week", action: () => console.log("Repeat: Weekly") },
    { label: "Custom repeat", action: () => console.log("Repeat: Custom") },
  ];

  const reminderItems = [
    { label: "Later today", action: () => console.log("Remind: Later today") },
    { label: "Tomorrow 9 AM", action: () => console.log("Remind: Tomorrow") },
    { label: "Pick date & time", action: () => console.log("Remind: Custom") },
  ];

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          type="text"
          value={input}
          className="transition-all duration-300 ease-in-out border border-gray-500 text-sm rounded-sm
           focus:ring-gray-300 focus:outline-none focus:border-gray-300 block w-full ps-8 p-2 bg-neutral-700 
            placeholder-gray-400"
          placeholder={placeholderText}
          required
        />

        <button
          type="button"
          onClick={handleIconClick}
          className="absolute inset-y-0 start-0 flex items-center ps-3"
        >
          <span>
            {focused ? (
              <RadioButtonUnChecked className="w-3.5 h-3.5 hover:text-white pointer-events-none" />
            ) : (
              <PlusIcon className="w-3.5 h-3.5 hover:text-white" />
            )}
          </span>
        </button>
        <div className="absolute inset-y-0 end-0 flex items-center gap-2 pe-3">
          <FloatingMenuWrapper menuItems={datePickerItems}>
            <div className=" flex items-center justify-center">
              <DatePickerIcon className="w-5 h-5 hover:text-white" />
              <p>{dueDate}</p>
            </div>
          </FloatingMenuWrapper>
          <FloatingMenuWrapper menuItems={reminderItems}>
            <div className="w-6 h-6 flex items-center justify-center">
              <AlarmClockIcon className="w-5 h-5 hover:text-white" />
            </div>
          </FloatingMenuWrapper>
          <FloatingMenuWrapper menuItems={repeatItems}>
            <div className="w-6 h-6 flex items-center justify-center">
              <CalendarRepeatIcon className="w-5 h-5 hover:text-white" />
            </div>
          </FloatingMenuWrapper>
        </div>
      </form>
    </div>
  );
};

export default TaskInputForm;
