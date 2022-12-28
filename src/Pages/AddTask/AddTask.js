import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { handleSubmit, register } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const handleTask = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        // console.log(imgData);
        if (imgData.success) {
          // console.log(imgData.data.url);
          const task = {
            task: data.task,
            image: imgData.data.url,
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
        }
      });
  };

  return (
    <div className="lg:w-5/12 w-11/12 mx-auto bg-slate-200 dark:bg-slate-800 px-10 py-10 rounded-t-lg">
      <form onSubmit={handleSubmit(handleTask)}>
        <h2 className="text-center text-xl text-gray-900 dark:text-gray-300 mb-3 uppercase">Add your task to the list</h2>
        <div>
          <label
            htmlFor="task"
            className="ml-2 mt-1 text-xs text-gray-900 dark:text-gray-300"
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
        <div>
          <label
            className="ml-2 mt-1 text-xs text-gray-900 dark:text-gray-300"
            htmlFor="file_input"
          >
            Upload file
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
            required
            {...register("image", { required: "Image is required" })}
          />
          <p
            className="ml-2 mt-1 text-xs text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            SVG, PNG, JPG or GIF.
          </p>
        </div>
        <div className="w-7/12 mx-auto">
          <button className="btn uppercase text-sm bg-slate-600 text-slate-100 dark:bg-blue-400 bg-opacity-60 dark:bg-opacity-20 hover:bg-opacity-90 hover:dark:bg-opacity-70 w-full py-2 mt-4">
            <input
              className="uppercase cursor-pointer"
              value="add task"
              type="submit"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
