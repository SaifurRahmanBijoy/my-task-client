import { Footer } from "flowbite-react";
import React from "react";

const EndElement = () => {
  return (
    <div className="pt-2">
      <Footer className="px-10 py-1 bg-slate-300 dark:bg-slate-700 shadow-md rounded-b-none rounded-t-md" >
        <Footer.Copyright by="Saifur Rahman" year={2022} />
        <Footer.LinkGroup className="hidden md:flex flex-wrap justify-around">
          <Footer.Link>About</Footer.Link>
          <Footer.Link>Privacy Policy</Footer.Link>
          <Footer.Link>Contact</Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </div>
  );
};

export default EndElement;
