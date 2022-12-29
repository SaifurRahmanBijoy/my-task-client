import React, { useState } from "react";
import UpdateModal from "./UpdateModal";

const Task = ({ myTask, refetch }) => {
  const [showModal, setShowModal] = useState(false);

  const { _id, task, completed } = myTask;
  const handleCompleted = (id) => {
    fetch(`https://my-task-server.vercel.app/task/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
        }
      });
  };

  const handleDelete = (id) => {
    fetch(`https://my-task-server.vercel.app/delete/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
        }
      });
  };

  if (showModal) {
    return (
      <UpdateModal
        setShowModal={setShowModal}
        myTask={myTask}
        refetch={refetch}
      ></UpdateModal>
    );
  }
  if (completed) {
    return null;
  }
  return (
    <div className="block bg-white border border-gray-200  shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-900 p-4">
      <h5 className="text-slate-700 dark:text-slate-200 mb-3 text-lg font-mono font-thin text-center">
        {task}
      </h5>
      <div className="grid md:grid-cols-3 gap-3">
        {completed ? (
          <p className="dark:text-slate-400 text-center">completed</p>
        ) : (
          <button
            type="button"
            onClick={() => handleCompleted(_id)}
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-2 py-1 bg-opacity-50 dark:bg-opacity-50 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 "
          >
            Completed
          </button>
        )}
        <button
          onClick={() => setShowModal(true)}
          className="focus:outline-none text-white bg-opacity-50 dark:bg-opacity-50 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium  text-sm px-5 py-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Update
        </button>
        <button
          type="button"
          onClick={() => handleDelete(_id)}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium  text-sm px-5 py-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
