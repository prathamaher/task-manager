import { useState } from "react";
import { addTasks } from "../store";
import { useDispatch } from "react-redux";
import { PlusIcon } from "./Icons";

const TaskInputForm = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input.trim()) return;

    dispatch(addTasks(input));
    setInput("");
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          value={input}
          className=" border border-gray-500 text-sm rounded-sm
           focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full ps-8 p-2 bg-gray-700 
            placeholder-gray-400"
          placeholder="Add New Task"
          required
        />
        <button
          type="submit"
          className="absolute inset-y-0 start-0 flex items-center ps-3"
        >
          <PlusIcon className="w-3.5 h-3.5  text-gray-400 hover:text-white" />
        </button>
      </form>
    </div>
  );
};

export default TaskInputForm;
