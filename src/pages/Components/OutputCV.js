import React from "react";
import { useLocation } from "react-router-dom";
export const OutputCV = ({ componentRef, inputForm, experiencesList }) => {
  const location = useLocation();
  return (
    <div className="border scale-75 border-gray-200" style={{ height: 800 }}>
      <div ref={componentRef}>
        <div className="bg-blue-400 h-8 mx-4"></div>
        <div className="flex  p-4">
          <div className="w-3/4 pr-1">
            <div className="border-b-4 border-sky-400 pt-2 pb-2">
              <h1
                className={`${
                  inputForm.firstName === "" && "h-12"
                }   font-bold text-gray-900 text-2xl`}
              >
                {location.pathname !== "/"
                  ? localStorage.getItem("header-firstName")
                    ? localStorage.getItem("header-firstName")
                    : inputForm.firstName
                  : !inputForm.firstName
                  ? "Your"
                  : inputForm.firstName}{" "}
                {location.pathname !== "/"
                  ? localStorage.getItem("header-lastName")
                    ? localStorage.getItem("header-lastName")
                    : inputForm.lastName
                  : !inputForm.lastName
                  ? "Name"
                  : inputForm.lastName}
              </h1>
              <p style={{ fontSize: 8 }}>
                {location.pathname !== "/"
                  ? localStorage.getItem("header-firstName")
                    ? localStorage.getItem("header-profession")
                    : inputForm.profession
                  : inputForm.profession}
              </p>
            </div>
            {/* Summary */}
            <div className="mt-4 pb-2 border-b-4 border-sky-400">
              <div className="flex h-6">
                <h2 className="font-bold">SUMMARY</h2>
                <span className="w-full ml-1 bg-sky-100"></span>
              </div>
              <p
                className={`${
                  inputForm.summary === "" && "h-40"
                } text-sm pt-2 pb-4`}
              >
                {inputForm.summary}
              </p>
            </div>
            {/* Experiences */}
            {location.pathname !== "/" && (
              <>
                <div className={`mt-4 pb-2 border-b-4 border-sky-400 mb-2 `}>
                  <div className="flex h-6 mb-4">
                    <h2 className="font-bold">EXPERIENCES</h2>
                    <span className="w-full ml-1 bg-sky-100"></span>
                  </div>
                  {experiencesList.map((items, index) => (
                    <div
                      key={index}
                      className={`${
                        experiencesList.length > 4 && "scale-75 -ml-10"
                      } mt-2 border border-gray-200 p-3`}
                    >
                      <h1 className="font-bold">
                        {items.jobTitle}
                        <span className="font-normal">
                          , {items.startDate} - {items.endDate}
                        </span>
                      </h1>
                      <p className="font-bold">
                        {items.employer}
                        <span className="font-normal">
                          {" "}
                          - {items.cityProvince}, {items.country}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          <div
            className="w-1/4 pl-1 border-l border-dotted break-all"
            style={{ height: 530 }}
          >
            <h1 className="border-b-2 border-sky-300 font-bold">Contact</h1>
            <div style={{ fontSize: 12 }}>
              <p className="mt-1 text-gray-700 font-semibold">Address</p>
              <p className="text-gray-500">
                {!inputForm.city ? "West Kalimantan" : inputForm.city}
                {", "}
                {inputForm.country}
                {", "}
                {inputForm.postalCode}
              </p>
            </div>
            <div className="mt-1" style={{ fontSize: 12 }}>
              <p className="text-gray-700 font-semibold">Phone</p>
              <p className="text-gray-500">
                {!inputForm.phone ? "62812365478" : inputForm.phone}
              </p>
            </div>
            <div className="mt-1" style={{ fontSize: 12 }}>
              <p className="text-gray-700 font-semibold">Email</p>
              <p className="text-gray-500">
                {!inputForm.email ? "maria62@example.com" : inputForm.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
