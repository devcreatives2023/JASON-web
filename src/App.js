import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Navbar } from "./components";
const App = () => {
  return (
    <div className="p-[1rem] font-body">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
