import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditTask = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState({});
  useEffect(() => {
    const url = `https://lower-marks-59208.herokuapp.com/task/${taskId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, []);
  return <div>{task.title}</div>;
};

export default EditTask;
