import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import Home from "./pages/Home/Home";
import C4CaseStudy from "./pages/C4CaseStudy/C4CaseStudy";
import PortfolioV1 from "./pages/PortfolioV1/PortfolioV1";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/portfolio-v1" element={<PortfolioV1 />} />
        <Route path="/projects/c4-sightcare" element={<C4CaseStudy />} />
      </Routes>
    </>
  );
}

export default App;
