import React from "react";

const Task = ({ myTask, refetch }) => {
  const { _id, task, completed } = myTask;
  const handleCompleted = (id) => {
    fetch(`http://localhost:5000/task/${id}`, {
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
    fetch(`http://localhost:5000/delete/${id}`, {
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
  return (
    <div className="block bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-4">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-300 text-center">
        {task}
      </h5>
      <div className="grid md:grid-cols-3 gap-3">
        {completed ? (
          <p className="dark:text-slate-400">completed</p>
        ) : (
          <button
            type="button"
            onClick={() => handleCompleted(_id)}
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-2 py-1 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Completed
          </button>
        )}
        <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          Update
        </button>
        <button
          type="button"
          onClick={() => handleDelete(_id)}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
