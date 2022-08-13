import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactToPrint from "react-to-print";
import { toast } from "react-toastify";
import { OutputCV } from "./Components/OutputCV";
export const Education = () => {
  const componentRef = useRef();
  const navRedirect = useNavigate();
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
  const [stepDone, setStepDone] = useState("!");
  const storeEducation = (e) => {
    e.preventDefault();
    toast.success("Saved to localStorage");
    localStorage.setItem("education-list", JSON.stringify(educationList));
    setStepDone("✔️");
  };
  const years = new Array();
  for (let i = 2030; i > 1990; i--) {
    years.push(i);
  }
  useEffect(() => {
    !localStorage.getItem("experiences") && navRedirect("/experience");

    localStorage.getItem("education-list") &&
      setEducationList(JSON.parse(localStorage.getItem("education-list")));
  }, []);
  const clearChace = (e) => {
    e.preventDefault();
    localStorage.clear();
    toast.success("cache clear");
    navRedirect("/");
  };
  return (
    <>
      <div className="md:flex md:columns-2 xl:w-full">
        <div className="md:w-3/4 shadow-md">
          <div className="rounded px-8 pt-6 pb-8 mb-4">
            <div className="flex justify-center mb-4">
              <ul className="steps">
                <li data-content="✔️" className="px-2 step step-neutral">
                  <Link to="/">Header</Link>
                </li>
                <li data-content="✔️" className="px-2 step step-neutral">
                  <Link to="/experience">Experience</Link>
                </li>
                <li
                  data-content={stepDone}
                  className={`px-2 step ${
                    stepDone === "!" ? "step-secondary" : "step-neutral"
                  }`}
                >
                  <Link to="/education">Education</Link>
                </li>
              </ul>
            </div>
            <div className="flex justify-between text-xs">
              <h1 className="md:text-3xl mb-4 text-sky-600 font-bold text-center ">
                Education
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
                <div className="mb-4 flex columns-2 gap-1">
                  <div className="w-2/4 mt-2 md:mt-0">
                    <label className="text-sm">Start Date</label>
                    <span className="text-gray-400 text-2xs ml-1">
                      (optional)
                    </span>
                    <select
                      name="startDate"
                      onChange={(e) => handleChangeEdu(e, i)}
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="">-- Select --</option>
                      {years.map((o, key) => (
                        <option
                          value={o}
                          key={key}
                          selected={x.startDate == o && "selected"}
                        >
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-2/4 mt-2 md:mt-0">
                    <label className="text-sm">End Date</label>
                    <span className="text-gray-400 text-2xs ml-1">
                      (optional)
                    </span>
                    <select
                      name="endDate"
                      onChange={(e) => handleChangeEdu(e, i)}
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="">-- Select --</option>

                      <option className="bg-gray-200" value="Sekarang">
                        I'm currently studying here
                      </option>
                      {years.map((o, key) => (
                        <option
                          value={o}
                          key={key}
                          selected={x.endDate == o && "selected"}
                        >
                          {o}
                        </option>
                      ))}
                    </select>
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
          </div>
          <div className="flex justify-center gap-3 mt-10">
            {/* next */}
            <button
              onClick={() => navRedirect("/experience")}
              className="bg-secondary hover:bg-gray-400 px-10 py-2 rounded-sm text-white"
            >
              Back
            </button>
            <button
              onClick={storeEducation}
              className="bg-sky-500 hover:bg-sky-600 px-10 py-2 rounded-sm text-white"
            >
              Save
            </button>
          </div>
          <div className="flex justify-center mt-4 ">
            <ReactToPrint
              trigger={() => {
                return (
                  <button
                    onClick={storeEducation}
                    className="bg-lime-700 hover:bg-lime-800 px-10 py-2 rounded-sm text-white"
                  >
                    Download CV
                  </button>
                );
              }}
              documentTitle={`CV-${localStorage.getItem(
                "header-firstName"
              )} ${localStorage.getItem("header-lastName")}`}
              content={() => componentRef.current}
            />
          </div>
          <div className="flex flex-center pb-10">
            <span
              onClick={clearChace}
              className=" hover:text-red-400 px-8 py-1 text-xs rounded-sm md:text-md text-red-600 cursor-pointer"
            >
              Clear Cache
            </span>
          </div>
        </div>
        <div className="md:w-2/4 grid text-2xs">
          <h1 className="text-center text-sky-900 font-bold text-lg mt-4 -mb-4">
            Preview
          </h1>
          <OutputCV componentRef={componentRef} educationList={educationList} />
        </div>
      </div>
    </>
  );
};
