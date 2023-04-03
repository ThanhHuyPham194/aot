import "./App.scss";
import React, { useLayoutEffect } from "react";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";

// import HomeMenu from "./pages/HomeMenu/HomeMenu";
// import About from "./pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>


        <Route path="/" element={<HomeTemplate />}>
            <Route path="/home" element={<Home />} />
          </Route>



          {/* <Route path="/menu" element={<HomeMenu />} />
          <Route path="/about" element={<About />}></Route> */}

        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

export default App;
