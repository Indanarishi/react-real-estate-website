import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// styles
import { GlobalStyles } from "./globalStyles";

// data
import { SliderData } from "./data/SliderData";
import { InfoData } from "./data/InfoData";

// components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dropdown from "./components/Dropdown";
import InfoSection from "./components/InfoSection";

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
        <InfoSection {...InfoData} />
      </Router>
    </>
  );
}

export default App;
