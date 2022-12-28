import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Task from "./Task";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

const MyTasks = () => {
  const { user } = useContext(AuthContext);
  const {
    data: myTasks = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await fetch(
        `https://my-task-server.vercel.app/tasks/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  // console.log(myTasks);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="w-10/12 mx-auto ">
        <h2 className="text-2xl font-mono font-thin text-center mb-6 border-b-2 dark:text-slate-400 border-gray-600 dark:border-gray-500">
          My tasks
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {myTasks.map((t, i) => (
            <Task key={i} refetch={refetch} myTask={t}></Task>
          ))}
        </div>
      </div>
      <Link to="/completed">
        <button className="sticky bottom-0 hover:py-5 left-3/4 font-mono font-thin text-center dark:text-white bg-blue-400 text-gray-600 p-4 rounded-full">
          Completed
        </button>
      </Link>
    </div>
  );
};

export default MyTasks;
