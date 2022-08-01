import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { OutputCV } from "./Components/OutputCV";
export const Education = () => {
  const componentRef = useRef();
  return (
    <>
      <div className="md:flex md:columns-2 xl:w-full">
        <div className="md:w-3/4 shadow-md">
          <div className="rounded px-8 pt-6 pb-8 mb-4">
            <div className="flex justify-between text-xs">
              <h1 className="md:text-3xl mb-4 text-sky-600 font-bold ml-20 text-center ">
                Let's start with your education
              </h1>
              <ReactToPrint
                trigger={() => {
                  // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                  // to the root node of the returned component as it will be overwritten.
                  return (
                    <a href="#" className="float-right">
                      {" "}
                      <i className="fa fa-download"></i> Download CV
                    </a>
                  );
                }}
                content={() => componentRef.current}
              />
            </div>
          </div>
        </div>
        <div className="md:w-2/4 grid text-2xs">
          <OutputCV componentRef={componentRef} />
        </div>
      </div>
    </>
  );
};
