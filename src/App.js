import Home from "./pages/Home";
import Content from "./pages/Content";
import About from "./pages/About";
import Landing from "./pages/Landing";

import { Routes, Route } from "react-router-dom";
import { HOME, CONTENT, ABOUT, LANDING } from "./router";
const App = () => {
  return (
    <>
      <Routes>
        <Route path={LANDING} element={<Landing />} />
        <Route path={HOME} element={<Home />} />
        <Route path={CONTENT} element={<Content />} />
        <Route path={ABOUT} element={<About />} />
      </Routes>
    </>
  );
};

export default App;
