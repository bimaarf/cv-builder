import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import { BsCheckSquare } from "react-icons/bs";
import Home from "./pages/Home";
import { Education } from "./pages/Education";
import { Navbar } from "./pages/Components/Navbar";
import { Experiences } from "./pages/Experiences";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { NotFound } from "./pages/NotFound";
import { Modal } from "./pages/Components/Modal";
function App() {
  const [headerDone, setHeaderDone] = useState();
  const [experienceDone, setExperienceDone] = useState();
  const location = useLocation();
  const [storageCheck, setStorageCheck] = useState()
  useEffect(() => {
    document.title = `CV - Builder ${location.pathname}`;
  }, []);
  return (
    <>
    <Modal />
      <ToastContainer />
      <div className="">
        <div className="md:flex md:columns-2 lg:columns-3">
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
