import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Loading from "../Loading/Loading";
import CompletedTaskCard from "./CompletedTaskCard";

const CompletedTask = () => {
  const { user } = useContext(AuthContext);
  const {
    data: myTasks = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/tasks/${user?.email}`);
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
      <div className="w-8/12 mx-auto ">
        <h2 className="text-2xl font-mono font-thin text-center mb-6 border-b-2 dark:text-slate-400 border-gray-600 dark:border-gray-500">
          Completed tasks
        </h2>
        <div className="grid gap-3">
          {myTasks.map((t, i) => (
            <CompletedTaskCard
              key={i}
              refetch={refetch}
              myTask={t}
            ></CompletedTaskCard>
          ))}
        </div>
      </div>
      <div>
        <Link to="/mytasks">
          <button className="sticky bottom-0 hover:py-5 dark:text-white left-3/4 font-mono font-thin text-center bg-blue-400 text-gray-600 p-4 rounded-full">
            Not Completed
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CompletedTask;
