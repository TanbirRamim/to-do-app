import React from "react";
import useTasks from "../CustomHooks/useTasks";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [tasks] = useTasks();
  const navigate = useNavigate();

  const navigateToEdit = (id) => {
    navigate(`/task/${id}`);
  };
  return (
    <div>
      <div className="my-5">
        <div className=" mt-4">
          <h1
            className="text-xl underline
                     underline-offset-2 font-mono text-center"
          >
            To-Do List
          </h1>
          <div>
            {tasks.map((task) => (
              <div key={task._id}>
                <div className="flex justify-between  shadow-md my-3 rounded p-3">
                  <div>
                    <h1 className="text-xl ">{task.title}</h1>
                    <p>{task.details}</p>
                  </div>

                  <div>
                    <button
                      onClick={() => navigateToEdit(task._id)}
                      className="btn text-white bg-yellow-800 mx-2 "
                    >
                      {" "}
                      Edit
                    </button>
                    <input
                      className="btn btn-primary bg-neutral text-white"
                      type="submit"
                      value="Complete"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
