import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // npm install react-route-dom
import About from "./Pages/about";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

// ROUTING PAGES
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
