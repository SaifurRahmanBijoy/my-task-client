import React from "react";

const CompletedTaskCard = ({ myTask, refetch }) => {
  const { _id, task, completed, comments } = myTask;
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
  if (!completed) {
    return null;
  }
  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const comment = { comment: event.target.comment.value };

    fetch(`https://my-task-server.vercel.app/comments/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="block bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-900 p-4">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-300 text-center">
        {task}
      </h5>
      <div className="flex justify-center items-center">
        <button
          type="button"
          onClick={() => handleDelete(_id)}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Delete
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 my-4 px-3">
        <div className="col-span-2 pb-4">
          <h2 className="text-black dark:text-slate-300 underline">
            Comments/Labels
          </h2>
          {comments?.map((c, i) => (
            <p key={i} className="text-black dark:text-slate-300 text-xs">
              {i + 1}. {c.comment}
            </p>
          ))}
        </div>
        <div>
          <form onSubmit={handleCommentSubmit} className="flex flex-col">
            <input type="text" name="comment" id="" />
            <input
              className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 my-2"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompletedTaskCard;
