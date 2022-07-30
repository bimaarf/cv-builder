import React, { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { OutputCV } from "./Components/OutputCV";
import { useNavigate } from "react-router-dom";
function Home() {
  const componentRef = useRef();
  const navRedirect = useNavigate();
  const [inputForm, setInputForm] = useState({
    firstName: localStorage.getItem("header-firstName"),
    lastName: localStorage.getItem("header-lastName"),
    profession: localStorage.getItem("header-profession"),
    city: localStorage.getItem("header-city"),
    country: localStorage.getItem("header-country"),
    postalCode: localStorage.getItem("header-postalCode"),
    phone: localStorage.getItem("header-phone"),
    email: localStorage.getItem("header-email"),
  });

  const handleInput = (e) => {
    e.persist();
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  };

  const storeHeader = () => {
    localStorage.setItem("header", "done");
    localStorage.setItem("header-firstName", inputForm.firstName);
    localStorage.setItem("header-lastName", inputForm.lastName);
    if (
      localStorage.setItem("header-profession", inputForm.profession) === null
    )
      return localStorage.setItem("header-profession", "");
    localStorage.setItem("header-profession", inputForm.profession);
    localStorage.setItem("header-city", inputForm.city);
    localStorage.setItem("header-country", inputForm.country);
    localStorage.setItem("header-postalCode", inputForm.postalCode);
    localStorage.setItem("header-phone", inputForm.phone);
    localStorage.setItem("header-email", inputForm.email);
    navRedirect("/experiences");
  };
  return (
    <>
      <div className="md:flex md:columns-2  xl:w-full ">
        <div className="md:w-3/4 shadow-md">
          <div className="rounded px-8 pt-6 pb-8 mb-4">
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
            <form onSubmit={storeHeader}>
              <div className="mb-2 mt-10 flex columns-2 gap-2">
                <div className="w-2/4">
                  <label
                    className="block text-gray-700 text-sm mb-2"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    onChange={handleInput}
                    value={inputForm.firstName}
                    name="firstName"
                    className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="text"
                    placeholder="e.g. Supriyadi"
                    required
                  />
                </div>
                <div className="w-2/4">
                  <label
                    className="block text-gray-700 text-sm mb-2"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    onChange={handleInput}
                    value={inputForm.lastName}
                    name="lastName"
                    className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="e.g. Puspita Sari"
                    required
                  />
                </div>
              </div>
              <div className="my-4">
                <label
                  className="text-gray-700 text-sm mb-2"
                  htmlFor="profession"
                >
                  Profession
                </label>
                <span className="text-gray-400 text-2xs ml-1">(optional)</span>
                <input
                  id="profession"
                  name="profession"
                  onChange={handleInput}
                  value={inputForm.profession}
                  className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="e.g. Sr. Accountant"
                />
              </div>
              <div className="my-4 flex columns-2 gap-2">
                <div className="w-2/4">
                  <label className="text-gray-700 text-sm mb-2" htmlFor="city">
                    City - Province
                  </label>
                  <input
                    id="city"
                    name="city"
                    onChange={handleInput}
                    value={inputForm.city}
                    className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="e.g. Aceh, West Kalimantan"
                    required
                  />
                </div>
                <div className="w-2/4">
                  <label
                    className="text-gray-700 text-sm mb-2"
                    htmlFor="country"
                  >
                    Country
                  </label>
                  <input
                    id="country"
                    name="country"
                    onChange={handleInput}
                    value={inputForm.country}
                    className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="e.g. Indonesia"
                    required
                  />
                </div>
              </div>
              <div className="my-4 w-2/4">
                <label
                  className="text-gray-700 text-sm mb-2"
                  htmlFor="postalCode"
                >
                  Postal Code
                </label>
                <input
                  id="postalCode"
                  name="postalCode"
                  onChange={handleInput}
                  value={inputForm.postalCode}
                  className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="e.g. 23615"
                  required
                />
              </div>
              <div className="flex columns-2 gap-2 my-4">
                <div className="w-2/4">
                  <label className="text-gray-700 text-sm mb-2" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="number"
                    name="phone"
                    onChange={handleInput}
                    value={inputForm.phone}
                    className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="e.g. +628XXXXXX"
                    required
                  />
                </div>
                <div className="w-2/4">
                  <label className="text-gray-700 text-sm mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    onChange={handleInput}
                    value={inputForm.email}
                    className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="e.g. maria62@example.com"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="text-white rounded-sm hover:bg-sky-600 bg-sky-500 py-2 px-10"
                >
                  Next Experiences
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="md:w-2/4 grid text-2xs">
          <OutputCV componentRef={componentRef} inputForm={inputForm} />
        </div>
      </div>
    </>
  );
}

export default Home;
