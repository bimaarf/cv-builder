import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { BsCheckSquare } from "react-icons/bs";
import Home from "./pages/Home";
import { Education } from "./pages/Education";
import { Navbar } from "./pages/Components/Navbar";
import { Experiences } from "./pages/Experiences";
function App() {
  return (
    <>
      <div className="">
        <div className="md:flex md:columns-3">
          <div className="md:w-1/4 bg-blue-500 ">
            <Navbar />
          </div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/experiences" element={<Experiences />} />
            <Route exact path="/education" element={<Education />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
