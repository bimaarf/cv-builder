import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
export const OutputCV = ({
  componentRef,
  inputForm,
  experiencesList,
  educationList,
}) => {
  const location = useLocation();
  const workListLocal = JSON.parse(
    localStorage.getItem("experiences-workList")
  );
  const eduListLocal = JSON.parse(localStorage.getItem("education-list"));
  return (
    <div className="border scale-95 border-gray-200" style={{ height: 1200 }}>
      <div ref={componentRef}>
        <div className="bg-blue-400 h-8 mx-4"></div>
        <div className="flex p-4">
          <div className="w-3/4 pr-2">
            <div className="border-b-4 border-sky-400 pt-2 pb-2">
              {/* <h1 className={` font-bold text-gray-900 text-2xl`}>
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
              </h1> */}
              {location.pathname === "/" ? (
                <h1 className={` font-bold text-gray-900 text-2xl`}>
                  {inputForm.firstName ? inputForm.firstName : "Your Name"}
                  {inputForm.firstName &&
                    inputForm.lastName &&
                    " " + inputForm.lastName}
                </h1>
              ) : (
                <h1 className={` font-bold text-gray-900 text-2xl`}>
                  {localStorage.getItem("header-firstName")}
                </h1>
              )}
              <p style={{ fontSize: 8 }}>
                {location.pathname !== "/"
                  ? localStorage.getItem("header-firstName")
                    ? localStorage.getItem("header-profession")
                    : inputForm.profession
                  : inputForm.profession}
              </p>
            </div>
            {/* Summary */}
            {/* Experiences */}
            <div className="mt-4 pb-2 border-b-4 border-sky-400">
              <div className="flex h-6">
                <h2 className="font-bold">SUMMARY</h2>
                <span className="w-full ml-1 bg-sky-100"></span>
              </div>
              <p className="text-sm pt-2 pb-4">
                {location.pathname === "/"
                  ? inputForm.summary
                  : localStorage.getItem("header-summary")}
              </p>
            </div>
            {location.pathname === "/experience" ? (
              <>
                <div className={`mt-4 pb-2 border-b-4 border-sky-400 mb-2 `}>
                  <div className="flex h-6 mb-4">
                    <h2 className="font-bold">EXPERIENCE</h2>
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
                        {items.startDate && (
                          <span className="font-normal">
                            , {items.startDate}{" "}
                            {items.endDate
                              ? "-" + items.endDate
                              : " - Sekarang"}
                          </span>
                        )}
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
            ) : (
              <>
                {workListLocal && (
                  <>
                    <div
                      className={`mt-4 pb-2 border-b-4 border-sky-400 mb-2 `}
                    >
                      <div className="flex h-6 mb-4">
                        <h2 className="font-bold">EXPERIENCE</h2>
                        <span className="w-full ml-1 bg-sky-100"></span>
                      </div>
                      {workListLocal.map((items, index) => (
                        <div
                          key={index}
                          className={`${
                            workListLocal.length > 4 && "scale-75 -ml-10"
                          } mt-2 border border-gray-200 p-3`}
                        >
                          <h1 className="font-bold">
                            {items.jobTitle}
                            {items.startDate && (
                              <span className="font-normal">
                                , {items.startDate}{" "}
                                {items.endDate
                                  ? "-" + items.endDate
                                  : " - Sekarang"}
                              </span>
                            )}
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
              </>
            )}
            {/* education */}
            {location.pathname === "/education" ? (
              <>
                <div className={`mt-4 pb-2 border-b-4 border-sky-400 mb-2 `}>
                  <div className="flex h-6 mb-4">
                    <h2 className="font-bold">EDUCATION</h2>
                    <span className="w-full ml-1 bg-sky-100"></span>
                  </div>
                  {educationList.map((items, index) => (
                    <div
                      key={index}
                      className={`${
                        educationList.length > 4 && "scale-75 -ml-10"
                      } mt-2 border border-gray-200 p-3`}
                    >
                      <h1 className="font-bold">
                        {items.schoolName}

                        {items.startDate && (
                          <span className="font-normal ml-1">
                            {items.startDate} - {items.endDate}
                          </span>
                        )}
                      </h1>
                      {items.degree && (
                        <span className="font-bold">{items.degree}, </span>
                      )}
                      {items.fieldOfStudy && (
                        <span className="font-bold">{items.fieldOfStudy}</span>
                      )}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                {eduListLocal && (
                  <>
                    <div
                      className={`mt-4 pb-2 border-b-4 border-sky-400 mb-2 `}
                    >
                      <div className="flex h-6 mb-4">
                        <h2 className="font-bold">EDUCATION</h2>
                        <span className="w-full ml-1 bg-sky-100"></span>
                      </div>
                      {eduListLocal.map((items, index) => (
                        <div
                          key={index}
                          className={`${
                            eduListLocal.length > 4 && "scale-75 -ml-10"
                          } mt-2 border border-gray-200 p-3`}
                        >
                          <h1 className="font-bold">
                            {items.schoolName}

                            {items.startDate && (
                              <span className="font-normal ml-1">
                                {items.startDate} - {items.endDate}
                              </span>
                            )}
                          </h1>
                          {items.degree && (
                            <span className="font-bold">{items.degree}, </span>
                          )}
                          {items.fieldOfStudy && (
                            <span className="font-bold">
                              {items.fieldOfStudy}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
          <div
            className="w-1/4 pl-2 border-l border-dotted break-all"
            style={{ height: 530 }}
          >
            <div className="flex justify-center">
              {localStorage.getItem("header-image") && (
                <div className="flex items-center justify-center w-32 scale-95">
                  <div className="flex items-center justify-center w-full">
                    <img
                      className="xl rounded-lg w-full h-36 object-cover object-top "
                      src={localStorage.getItem("header-image")}
                      alt=""
                    />
                  </div>
                </div>
              )}
            </div>
            <h1 className="border-b-2 border-sky-300 font-bold">Contact</h1>
            <div style={{ fontSize: 12 }}>
              <p className="mt-1 text-gray-700 font-semibold">Address</p>
              {location.pathname === "/" ? (
                <p className="text-gray-500">
                  {!inputForm.city ? "West Kalimantan" : inputForm.city}
                  {", "}
                  {inputForm.country}
                  {", "}
                  {inputForm.postalCode}
                </p>
              ) : (
                <>asd</>
              )}
            </div>
            <div className="mt-1" style={{ fontSize: 12 }}>
              <p className="text-gray-700 font-semibold">Phone</p>
              <p className="text-gray-500">
                {location.pathname === "/"
                  ? !inputForm.phone
                    ? "62812365478"
                    : inputForm.phone
                  : localStorage.getItem("header-phone")}
              </p>
            </div>
            <div className="mt-1" style={{ fontSize: 12 }}>
              <p className="text-gray-700 font-semibold">Email</p>
              <p className="text-gray-500">
                {location.pathname === "/"
                  ? !inputForm.email
                    ? "maria62@example.com"
                    : inputForm.email
                  : localStorage.getItem("header-email")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
