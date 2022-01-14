import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// styles
import { GlobalStyles } from "./globalStyles";

// data
import { SliderData } from "./data/SliderData";

// components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dropdown from "./components/Dropdown";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Router>
        <GlobalStyles />
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Hero slides={SliderData} />
      </Router>
    </>
  );
}

export default App;
