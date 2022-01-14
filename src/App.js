import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// styles
import { GlobalStyles } from "./globalStyles";

// components
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Navbar />
      </Router>
    </>
  );
}

export default App;
