import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// styles
import { GlobalStyles } from "./globalStyles";

// data
import { SliderData } from "./data/SliderData";

// components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Navbar />
        <Hero slides={SliderData} />
      </Router>
    </>
  );
}

export default App;
