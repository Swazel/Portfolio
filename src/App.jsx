import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import C4CaseStudy from "./pages/C4CaseStudy/C4CaseStudy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/projects/c4-sightcare" element={<C4CaseStudy />} />
    </Routes>
  );
}

export default App;
