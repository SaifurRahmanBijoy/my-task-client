import React from "react";
import { useForm } from "react-hook-form";

const UpdateModal = ({ setShowModal, myTask, refetch }) => {
  const { handleSubmit, register } = useForm();
  const handleAgain = (data) => {
    const task = { task: data.task };
    const id = myTask._id;

    fetch(`https://my-task-server.vercel.app/taskup/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((result) => {
        refetch();
        setShowModal(false);
      });
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className=" w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-slate-900 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-2xl font-semibold dark:text-slate-400">
                Update task immediately
              </h3>
            </div>
            {/*body*/}
            <form
              onSubmit={handleSubmit(handleAgain)}
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
                  defaultValue={myTask.task}
                  {...register("task", { required: "Task is required" })}
                />
              </div>
              <div className="flex flex-row-reverse items-center justify-around my-4">
                <button className="btn uppercase text-sm bg-slate-600 text-slate-100 dark:bg-blue-400 bg-opacity-60 dark:bg-opacity-20 hover:bg-opacity-90 hover:dark:bg-opacity-70 w-full py-2">
                  <input
                    className="uppercase cursor-pointer"
                    value="Update task"
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
    </>
  );
};

export default UpdateModal;
