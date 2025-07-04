import axios from "axios";

const addNewDate = async () => {
  try {
    const response = await axios.post("http://localhost:3001/tasks", {
      date: new Date(),
    });
  } catch (err) {
    console.log("error adding new date : ", err);
  }
};

export default addNewDate;
