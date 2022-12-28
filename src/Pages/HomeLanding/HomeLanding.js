import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

import todo from "../../Utilities/todo.svg";
import Modal from "./Modal";

const HomeLanding = () => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(AuthContext);
  if (showModal) {
    return <Modal setShowModal={setShowModal}></Modal>;
  }
  return (
    <div>
      <div className="w-10/12 mx-auto flex flex-col md:flex-row items-center">
        <img
          className=" p-5 rounded-2xl w-11/12 md:w-9/12 lg:w-2/5 mx-auto"
          src={todo}
          alt=""
        />
        <div className="p-5 lg:pl-10 lg:pr-0">
          <p className="text-slate-600 dark:text-slate-300 font-normal text-justify lg:text-xl">
            The need for a task management app depends upon the need of the
            user, if you are performing the tasks that require resources both
            financial and physical, and your tasks are time-bound and need
            reporting, then you have the need for the usage of task management
            apps.
          </p>
          {user?.email ? (
            <button
              onClick={() => setShowModal(true)}
              className="mt-3 w-full inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-opacity-25 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Add task
            </button>
          ) : (
            <p className="text-red-400 text-sm font-mono font-thin my-3">Please login first to add task</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeLanding;
