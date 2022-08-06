import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { BsCheckSquare } from "react-icons/bs";
import Home from "./pages/Home";
import { Education } from "./pages/Education";
import { Navbar } from "./pages/Components/Navbar";
import { Experiences } from "./pages/Experiences";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
function App() {
  const [headerDone, setHeaderDone] = useState();
  const [experienceDone, setExperienceDone] = useState();
  return (
    <>
      <ToastContainer />
      <div className="">
        <div className="md:flex md:columns-3">
          <div className="md:w-1/4 bg-blue-500 ">
            <Navbar headerDone={headerDone} experienceDone={experienceDone} />
          </div>
          <Routes>
            <Route
              exact
              path="/"
              element={<Home setHeaderDone={setHeaderDone} />}
            />
            <Route
              exact
              path="/experience"
              element={<Experiences setExperienceDone={setExperienceDone} />}
            />
            <Route path="/education" element={<Education />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
