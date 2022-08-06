import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { BsCheckSquare } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";

export const Navbar = ({ headerDone, experienceDone }) => {
  return (
    <>
      <aside className="p-10 h-screen text-xs hidden md:block">
        <ul className=" space-y-3">
          <h1 className="text-white md:text-2xl font-bold">
            Create Your <span className="text-blue-700">CV</span>
          </h1>
          <li className=" text-white md:py-3 md:px-12 md:w-full rounded-lg flex justify-start">
            <BsCheckSquare className="md:text-xl" />
            <Link to="/" className="md:text-2xl -mt-2 ml-2">
              Header
            </Link>
          </li>
          <li className=" text-white md:py-3 md:px-12 md:w-full rounded-lg flex justify-start">
            {headerDone === 'done' ? (
              <>
                <BsCheckSquare className="md:text-xl" />
                <Link to="/experience" className="md:text-2xl -mt-2 ml-2">
                  Experience
                </Link>
              </>
            ) : (
              <>
                <AiFillLock className="md:text-xl" />
                <span className="md:text-2xl -mt-2 ml-2">experience</span>
              </>
            )}
          </li>
          <li className=" text-white md:py-3 md:px-12 md:w-full rounded-lg flex justify-start">
            {experienceDone === 'done' ? (
              <>
                <BsCheckSquare className="md:text-xl" />
                <Link to="/education" className="md:text-2xl -mt-2 ml-2">
                  Education
                </Link>
              </>
            ) : (
              <>
                <AiFillLock className="md:text-xl" />
                <span className="md:text-2xl -mt-2 ml-2">Education</span>
              </>
            )}
          </li>
        </ul>
      </aside>
    </>
  );
};
