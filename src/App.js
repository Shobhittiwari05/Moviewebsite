import "./styles.css";
import React from "react";
import ShowList from "./showlist";
import ShowDetails from "./showdetails";
import ShowAbout from "./showabout";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<ShowList />} />
          <Route path="/:id" element={<ShowDetails />} />
          <Route path="/name/:name/:type/:language" element={<ShowAbout />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
