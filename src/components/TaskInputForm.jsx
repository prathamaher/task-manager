import { useState } from "react";
import { addTasks } from "../store";
import { useDispatch } from "react-redux";
import { PlusIcon, RadioButtonUnChecked } from "./Icons";

const TaskInputForm = () => {
  const [input, setInput] = useState("");
  const [focused, setFocused] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input.trim()) return;
    dispatch(addTasks(input));
    setInput("");
  };

  //for icon click-submit
  const handleIconClick = () => {
    if (!input.trim()) return;
    dispatch(addTasks(input));
    setInput("");
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const placeholderText = focused
    ? "Try typing 'Pay utility bills by Friday 6pm"
    : "Add new task";

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <input
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
      </form>
    </div>
  );
};

export default TaskInputForm;
