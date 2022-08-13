import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { OutputCV } from "./Components/OutputCV";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Home({ setHeaderDone }) {
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
    summary: localStorage.getItem("header-summary"),
  });
  const [imageFormat, setImageFormat] = useState("");
  const handleInputImage = (e) => {
    const file = e.target.files[0];
    if (!file.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      toast.error("file format not supported");
    } else {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        localStorage.setItem("header-image", reader.result);
        setImageFormat(reader.result);
      });
      reader.readAsDataURL(file);
    }
  };

  const handleInput = (e) => {
    e.persist();
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  };
  const storeHeader = () => {
    setHeaderDone("done");
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
    localStorage.setItem("header-phone", inputForm.phone);
    localStorage.setItem("header-summary", inputForm.summary);
    localStorage.setItem("header-urlList", JSON.stringify(urlList));
    localStorage.setItem("header-skillList", JSON.stringify(skillList));
    navRedirect("/experience");
  };
  const auto_grow = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };
  const handleDelImage = (e) => {
    e.preventDefault();
    localStorage.removeItem("header-image");
    navRedirect("/");
  };
  // url dynamic
  const [urlList, setUrlList] = useState([]);
  const handleChangeUrl = (e, index) => {
    e.persist();
    const { name, value } = e.target;
    const list = [...urlList];
    list[index][name] = value;
    setUrlList(list);
  };
  const handleAddUrl = (e) => {
    e.preventDefault();
    setUrlList([
      ...urlList,
      {
        label: "Instagram",
        url: "",
      },
    ]);
  };
  const handleDelUrl = (index) => {
    const list = [...urlList];
    list.splice(index, 1);
    setUrlList(list);
  };
  const urlFromStorage = JSON.parse(localStorage.getItem("header-urlList"));
  const skillFromStorage = JSON.parse(localStorage.getItem("header-skillList"));
  useEffect(() => {
    urlFromStorage && setUrlList(urlFromStorage);
    skillFromStorage && setSkill(skillFromStorage)
    return;
  }, []);
  // add skill
  const [skillList, setSkill] = useState([]);
  const handleChangeSkill = (e, index) => {
    e.persist();
    const { name, value } = e.target;
    const list = [...skillList];
    list[index][name] = value;
    setSkill(list);
  };
  const handleAddSkill = (e) => {
    e.preventDefault();
    setSkill([
      ...skillList,
      {
        skill: "",
      },
    ]);
  };
  const handleDelSkill = (index) => {
    const list = [...skillList];
    list.splice(index, 1);
    setSkill(list);
  };
  return (
    <>
      <div className="md:flex md:columns-2  xl:w-full ">
        <div className="md:w-3/4 shadow-md">
          <div className="rounded px-8 pt-6 pb-8 mb-4">
            <div className="flex justify-center mb-4">
              <ul className="steps">
                <li data-content="!" className="px-2 step step-secondary">
                  <Link to="/">Header</Link>
                </li>
                <li data-content="?" className="px-2 step step-neutral">
                  <Link to="/experience">Experience</Link>
                </li>
                <li data-content="?" className="px-2 step step-neutral">
                  <Link to="/education">Education</Link>
                </li>
              </ul>
            </div>
            <div className="flex justify-between text-xs">
              <h1 className="md:text-3xl mb-4 text-sky-600 font-bold text-center ">
                Let's start with your header
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
            <form onSubmit={storeHeader}>
              <div className="flex columns-2 gap-2">
                <div className=" rounded-lg">
                  <div className="m-4">
                    <div className="flex items-center justify-center w-36">
                      <label className="flex flex-col w-full h-32 border border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                        <div className="flex flex-col items-center justify-center pt-7">
                          {localStorage.getItem("header-image") ? (
                            <>
                              <img
                                id="myImg"
                                src={localStorage.getItem("header-image")}
                                className=" text-gray-400 group-hover:text-gray-600 -mt-10 w-full h-36 object-cover object-top"
                                alt={localStorage.getItem("header-image")}
                              />
                              <button
                                type="button"
                                onClick={handleDelImage}
                                className="absolute ml-28 mt-20 text-gray-300 hover:text-yellow-500"
                              >
                                <i className="fa fa-repeat"></i>
                              </button>
                            </>
                          ) : (
                            <>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                />
                              </svg>
                              <p className="text-gray-200 text-xs mt-5">
                                Photo
                              </p>
                              <p className="text-gray-200 text-xs mt-1">
                                (optional)
                              </p>
                            </>
                          )}
                        </div>
                        <input
                          id="input-image"
                          onChange={handleInputImage}
                          type="file"
                          accept="image/*"
                          name="image"
                          className="opacity-0"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-2 w-full">
                  <div className="">
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
                  <div className="my-2">
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
              <div className="w-4/4">
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="firstName"
                >
                  Summary
                </label>
                <textarea
                  onKeyDown={auto_grow}
                  onChange={handleInput}
                  value={inputForm.summary}
                  name="summary"
                  rows={8}
                  maxLength={500}
                  className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="summary"
                  type="text"
                  placeholder="e.g. introduce yourself and your daily life"
                >
                  {" "}
                </textarea>
              </div>
              <div className="my-2">
                <button onClick={handleAddUrl} className="text-sm">
                  <i className="fa fa-plus"></i> Add Url
                </button>
                {urlList.slice(0, urlList.length).map((x, i) => (
                  <div key={i} className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="text"
                      name="url"
                      id="url"
                      onChange={(e) => handleChangeUrl(e, i)}
                      value={x.url}
                      className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-28"
                      placeholder="https://instagram.com/username"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <span
                        id={`del${i}`}
                        onClick={() => handleDelUrl(i)}
                        className="focus:ring-indigo-500 flex place-items-center focus:border-indigo-500 h-full py-0 pl-2 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md focus:outline-none focus:shadow-outline cursor-pointer"
                      >
                        <i className="fa fa-minus text-red-700"></i>
                      </span>
                      <select
                        id="label"
                        name="label"
                        onChange={(e) => handleChangeUrl(e, i)}
                        value={x.label}
                        className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md focus:outline-none focus:shadow-outline "
                      >
                        <option value="Instagram">Instagram</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Website">Website</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
              <div className="my-2 mt-4">
                <button onClick={handleAddSkill} className="text-sm">
                  <i className="fa fa-plus"></i> Add Skill
                </button>
                {skillList.slice(0, skillList.length).map((x, i) => (
                  <div key={i} className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="text"
                      name="skill"
                      id="skill"
                      onChange={(e) => handleChangeSkill(e, i)}
                      value={x.skill}
                      className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-7"
                      placeholder="e.g. Photoshop"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <span
                        id={`delSkill${i}`}
                        onClick={() => handleDelSkill(i)}
                        className="focus:ring-indigo-500 flex place-items-center focus:border-indigo-500 h-full py-0 pl-2 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md focus:outline-none focus:shadow-outline cursor-pointer"
                      >
                        <i className="fa fa-minus text-red-700"></i>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="text-white rounded-sm hover:bg-sky-600 bg-sky-500 py-2 px-10"
                >
                  Next Experience
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="md:w-2/4 grid text-2xs">
          <h1 className="text-center text-sky-900 font-bold text-lg mt-4 -mb-4">
            Preview
          </h1>
          <OutputCV
            imageFormat={imageFormat}
            componentRef={componentRef}
            inputForm={inputForm}
            urlList={urlList}
            skillList={skillList}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
