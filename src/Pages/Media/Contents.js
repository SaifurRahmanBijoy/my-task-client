import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Loading from "../Loading/Loading";
import Content from "./Content";

const Contents = () => {
  const { user } = useContext(AuthContext);
  const { data: myTasks = [], isLoading } = useQuery({
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
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2 w-10/12 mx-auto">
      {myTasks?.map((t, i) => (
        <Content key={i} content={t}></Content>
      ))}
    </section>
  );
};

export default Contents;
