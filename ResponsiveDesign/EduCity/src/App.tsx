import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Programes from "./components/programes/Programes";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Programes />
      </div>
    </div>
  );
};

export default App;
