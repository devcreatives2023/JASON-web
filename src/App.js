import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Gallery, Home, Info, Portfolio, Works } from "./pages";
import { AnimatePresence } from "framer-motion";
const App = () => {
  const[count, setCount] = useState(1);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="">
        <Router>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="link" element={<Portfolio />} />
              <Route path="info" element={<Info />} />
              <Route path="works" element={<Works />} />
              <Route path="gallery" element={<Gallery />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </AnimatePresence>
  );
};

export default App;
