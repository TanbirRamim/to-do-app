import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useTasks from "../CustomHooks/useTasks";
import { useNavigate } from "react-router-dom";

const ToDo = () => {
  const [tasks] = useTasks();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const navigateToEdit = (id) => {
    navigate(`/task/${id}`);
  };
  const onSubmit = (data) => {
    const url = `https://lower-marks-59208.herokuapp.com/task`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          toast("Your task has been added");
        }
      });
  };

  return (
    <div>
      <div>
        <h1 className=" text-center text-xl my-3 underline underline-offset-4 ">
          Add Your To-Do
        </h1>

        <form
          className="flex flex-col w-6/12 mx-auto   space-y-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="border border-dark p-2 rounded w-7/12 mx-auto"
            placeholder="Title"
            {...register("title", { required: true, maxLength: 20 })}
          />
          <textarea
            className="border border-dark p-2 rounded w-7/12 mx-auto"
            placeholder="Details"
            {...register("details", { required: true })}
          />

          <input
            className=" btn btn-primary bg-neutral text-white w-25 mx-auto"
            type="submit"
            value="ADD"
          />
        </form>
      </div>
      <div className="my-5">
        <hr className="bg-dark " />

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
                <div className="flex justify-between shadow-md my-3 rounded p-3">
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

export default ToDo;
