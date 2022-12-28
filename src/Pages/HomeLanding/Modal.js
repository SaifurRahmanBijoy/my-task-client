import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Modal = ({ setShowModal }) => {
  const { user } = useContext(AuthContext);
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const handleTask = (data) => {
    console.log(user, data);
    const task = {
      task: data.task,
      email: user.email,
    };

    // save task info to mongoDB
    fetch("http://localhost:5000/add_tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        navigate("/mytasks");
      });
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white bg-opacity-70 dark:bg-slate-900 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-2xl font-semibold dark:text-slate-400">
                Add task immediately
              </h3>
            </div>
            {/*body*/}
            <form
              onSubmit={handleSubmit(handleTask)}
              className=" p-6 flex-auto"
            >
              <div>
                <label
                  htmlFor="task"
                  className="ml-2 mt-1 text-xs text-gray-500 dark:text-gray-300"
                >
                  Task
                </label>
                <input
                  type="text"
                  id="task"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="task"
                  {...register("task", { required: "Task is required" })}
                />
              </div>
              <div className="flex flex-row-reverse items-center justify-around my-4">
                <button className="btn uppercase text-sm bg-slate-600 text-slate-100 dark:bg-blue-400 bg-opacity-60 dark:bg-opacity-20 hover:bg-opacity-90 hover:dark:bg-opacity-70 w-full py-2">
                  <input
                    className="uppercase cursor-pointer"
                    value="add task"
                    type="submit"
                  />
                </button>
                <button
                  className="text-red-500 py-2 background-transparent font-bold uppercase px-6  text-sm outline-none focus:outline-none  ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </form>
            {/*footer*/}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
