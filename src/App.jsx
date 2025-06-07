import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import "./App.css";
import Cutz from "./Cutz";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Cutz />
    </div>
  );
};

export default App;
