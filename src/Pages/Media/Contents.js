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
    <section className="overflow-hidden text-gray-700 ">
      {myTasks?.map((t, i) => (
        <Content key={i} content={t}></Content>
      ))}
    </section>
  );
};

export default Contents;
