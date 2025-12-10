import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Services from "./Pages/Services";
import NotFoundPage from "./Pages/NotFoundPage";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
