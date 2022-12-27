import React from "react";
import todo from "../../Utilities/Todo.png";

const HomeLanding = () => {
  return (
    <div className="w-10/12 mx-auto flex flex-col md:flex-row items-center">
      <img
        className="bg-slate-400 dark:bg-blue-300 p-1 rounded-full w-11/12 md:w-9/12 lg:w-2/5 mx-auto"
        src={todo}
        alt=""
      />
      <p className="text-slate-600 dark:text-slate-300 p-5 lg:pl-10 lg:pr-0 font-thin text-justify lg:text-2xl">
        The need for a task management app depends upon the need of the user, if
        you are performing the tasks that require resources both financial and
        physical, and your tasks are time-bound and need reporting, then you
        have the need for the usage of task management apps.
      </p>
    </div>
  );
};

export default HomeLanding;
