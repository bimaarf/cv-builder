import React, { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { OutputCV } from "./Components/OutputCV";
export const Experiences = () => {
  const componentRef = useRef();
  const [inputForm, setInputForm] = useState({
    summary: "",
  });

  const [experiencesList, setExperiencesList] = useState([
    {
      jobTitle: "",
      employer: "",
      cityProvince: "",
      country: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const handleInput = (e) => {
    e.persist();
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  };
  const auto_grow = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };
  const handleChangeExperience = (e, index) => {
    const { name, value } = e.target;
    const list = [...experiencesList];
    list[index][name] = value;
    setExperiencesList(list);
  };
  // handle click event of the Remove button
  const handleDelRow = (index) => {
    const list = [...experiencesList];
    list.splice(index, 1);
    setExperiencesList(list);
  };

  // handle click event of the Add button
  const handleAddRow = (e) => {
    e.preventDefault();
    setExperiencesList([
      ...experiencesList,
      {
        jobTitle: "",
        employer: "",
        cityProvince: "",
        country: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };
  // tes localStorage
  const storeExperiences = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "experiences-workList",
      JSON.stringify(experiencesList)
    );
  };
  const workList = JSON.parse(localStorage.getItem("experiences-workList"));
  useEffect(() => {
    if (workList) {
      setExperiencesList(workList);
    }
  }, []);
  return (
    <>
      <div className="md:flex md:columns-2 mt-4 xl:w-3/4">
        <div className="md:w-2/4">
          <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="flex justify-between text-xs">
              <h1 className="md:text-3xl mb-4 text-sky-600 font-bold ml-20 text-center ">
                Let's start with your header
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
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="summary"
              >
                Summary
              </label>
              <textarea
                onKeyDown={auto_grow}
                onChange={handleInput}
                value={inputForm.summary}
                name="summary"
                rows={8}
                className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="summary"
                type="text"
                placeholder="e.g. introduce yourself and your daily life"
              >
                {" "}
              </textarea>
            </div>
            <hr />

            {experiencesList.slice(0, experiencesList.length).map((x, i) => (
              <div key={i} className="mb-4">
                <div className="mb-4">
                  <label className="text-sm">Job Title</label>
                  <input
                    className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="jobTitle"
                    type="text"
                    placeholder="e.g. Retail Sales Associate"
                    value={x.jobTitle}
                    onChange={(e) => handleChangeExperience(e, i)}
                  />
                </div>
                <div className="mb-4">
                  <label className="text-sm">Employer</label>
                  <input
                    className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="employer"
                    type="text"
                    placeholder="e.g. Kems Holiday"
                    value={x.employer}
                    onChange={(e) => handleChangeExperience(e, i)}
                  />
                </div>
                {/* province - country */}
                <div className="mb-4 flex columns-2 gap-1">
                  <div className="w-2/4">
                    <label className="text-sm">City - Province</label>
                    <input
                      className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="cityProvince"
                      type="text"
                      value={x.cityProvince}
                      placeholder="e.g. Medan, North Sumatra"
                      onChange={(e) => handleChangeExperience(e, i)}
                    />
                  </div>
                  <div className="w-2/4">
                    <label className="text-sm">Province</label>
                    <input
                      className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="country"
                      type="text"
                      value={x.country}
                      placeholder="e.g. Indonesia"
                      onChange={(e) => handleChangeExperience(e, i)}
                    />
                  </div>
                </div>
                {/* date */}
                <div className="mb-4 flex columns-2 gap-1">
                  <div className="w-2/4">
                    <label className="text-sm">Start Date</label>
                    <input
                      className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="startDate"
                      type="date"
                      value={x.startDate}
                      onChange={(e) => handleChangeExperience(e, i)}
                    />
                  </div>
                  <div className="w-2/4">
                    <label className="text-sm">End Date</label>
                    <input
                      className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="endDate"
                      type="date"
                      value={x.endDate}
                      onChange={(e) => handleChangeExperience(e, i)}
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  {experiencesList.length !== 1 && (
                    <button
                      id={`del${i}`}
                      className="bg-red-700 hover:bg-red-800 px-5 py-3 rounded-lg text-white"
                      onClick={() => handleDelRow(i)}
                    >
                      Remove
                    </button>
                  )}
                  {experiencesList.length - 1 === i ? (
                    <button
                      className={`bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-lg text-white ${
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

            {/* next */}
            <button
              onClick={storeExperiences}
              className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-lg text-white"
            >
              Next
            </button>
          </div>
        </div>

        <div className="md:w-2/4 scale-75 grid text-2xs">
          <OutputCV
            componentRef={componentRef}
            inputForm={inputForm}
            experiencesList={experiencesList}
          />
        </div>
      </div>
    </>
  );
};
