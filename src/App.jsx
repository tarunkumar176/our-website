import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "./components/scrolltotop";
import Homepage from "./pages/homepage";
import ServicesPage from "./pages/services";
import GetInTouch from "./components/getintouch";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<GetInTouch />} />
      </Routes>
    </Router>
  );
}