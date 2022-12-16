import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "../src/pages/Home/Home";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" />
        <Route path="/contact" />
        <Route path="/about" />
      </Routes>
    </Router>
  );
}

export default App;
