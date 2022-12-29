// import { Footer } from "flowbite-react";
import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";

const EndElement = () => {
  const copyRight = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const showDetails = () => {
    const action = {
      type: "SET_USER",
      user: "Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark. ",
    };
    dispatch(action);
  };

  return (
    <div className="pt-2" onClick={showDetails}>
      <div className="text-center py-1 bg-slate-300 dark:bg-slate-700 shadow-md rounded-b-none rounded-t-md">
        <div className="flex justify-center items-center">
          <p className=" text-slate-700 dark:text-slate-400 font-thin font-mono text-sm">{copyRight}</p>
        </div>
        {/* <Footer.LinkGroup className="hidden md:flex flex-wrap justify-around">
          <Footer.Link>About</Footer.Link>
          <Footer.Link>Privacy Policy</Footer.Link>
          <Footer.Link>Contact</Footer.Link>
        </Footer.LinkGroup> */}
      </div>
    </div>
  );
};

export default connect((store) => store)(EndElement);
