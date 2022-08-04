import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { OutputCV } from "./Components/OutputCV";
import format from "date-fns/format";
export const Education = () => {
  const componentRef = useRef();
  const [educationList, setEducationList] = useState([
    {
      schoolName: "",
      degree: "",
      schoolLocation: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const handleChangeEdu = (e, index) => {
    const { name, value } = e.target;
    const list = [...educationList];
    list[index][name] = value;
    setEducationList(list);
  };
  // handle click event of the Remove button
  const handleDelRow = (index) => {
    const list = [...educationList];
    list.splice(index, 1);
    setEducationList(list);
  };

  // handle click event of the Add button
  const handleAddRow = (e) => {
    e.preventDefault();
    setEducationList([
      ...educationList,
      {
        schoolName: "",
        degree: "",
        schoolLocation: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };
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
            <form>
              {educationList.slice(0, educationList.length).map((x, i) => (
                <div key={i} className="mb-4">
                  <div className="mb-4">
                    <label className="text-sm">School Name</label>
                    <input
                      className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="schoolName"
                      type="text"
                      placeholder="e.g. University of San Carlos"
                      value={x.schoolName}
                      onChange={(e) => handleChangeEdu(e, i)}
                    />
                  </div>
                  <div className="mb-4 flex columns-2 gap-1">
                    <div className="w-2/4">
                      <label className="text-wm">Degree</label>
                      <span className="text-gray-400 text-2xs ml-1">
                        (optional)
                      </span>
                      <input
                        onChange={(e) => handleChangeEdu(e, i)}
                        value={x.degree}
                        name="degree"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="e.g. Ph.D"
                      />
                    </div>
                    <div className="w-2/4">
                      <label className="text-wm">Field of Study</label>
                      <input
                        onChange={(e) => handleChangeEdu(e, i)}
                        value={x.fieldOfStudy}
                        name="fieldOfStudy"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="e.g. Accounting Technology"
                      />
                    </div>
                  </div>
                  {/* date */}
                  <div className="mb-4 md:flex md:columns-2 gap-1">
                    <div className="md:w-2/4 mt-2 md:mt-0">
                      <label className="text-sm">Start Date</label>
                      <input
                        className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="startDate"
                        type="month"
                        value={x.startDate}
                        onChange={(e) => handleChangeEdu(e, i)}
                      />
                    </div>
                    <div className="md:w-2/4 mt-2 md:mt-0">
                      <label className="text-sm">End Date</label>
                      <input
                        className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="endDate"
                        type={x.endDate.length > 0 ? "month" : "text"}
                        value={x.endDate}
                        placeholder="I'm currently studying here"
                        onFocus={(e) => (e.target.type = "month")}
                        onBlur={(e) =>
                          x.endDate.length > 0
                            ? (e.target.type = "month")
                            : (e.target.type = "text")
                        }
                        onChange={(e) => handleChangeEdu(e, i)}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between float-right gap-4">
                    {educationList.length !== 1 && (
                      <button
                        id={`del${i}`}
                        className="bg-red-700 hover:bg-red-800 px-5 py-3 my-2 rounded-lg text-white"
                        onClick={() => handleDelRow(i)}
                      >
                        Remove
                      </button>
                    )}
                    {educationList.length - 1 === i ? (
                      <button
                        className={`bg-blue-500 hover:bg-blue-600 px-5 py-3 my-2 rounded-lg text-white ${
                          i > 5 && "hidden"
                        }`}
                        onClick={handleAddRow}
                      >
                        Add
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ))}
            </form>
          </div>
        </div>
        <div className="md:w-2/4 grid text-2xs">
          <OutputCV componentRef={componentRef} />
        </div>
      </div>
    </>
  );
};
