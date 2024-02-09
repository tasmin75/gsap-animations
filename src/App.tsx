import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import AnimatedPage from "./pages/AnimatedPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animated-page" element={<AnimatedPage />} />
        <Route path="/page-one" element={<PageOne />} />
        <Route path="/page-two" element={<PageTwo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
