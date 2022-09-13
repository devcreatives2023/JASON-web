import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Info, Portfolio, Works } from "./pages";
import { AnimatePresence } from "framer-motion";
const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className=" font-body">
        <Router>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="link" element={<Portfolio />} />
              <Route path="info" element={<Info />} />
              <Route path="works" element={<Works />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </AnimatePresence>
  );
};

export default App;
