import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/home"; // ✅ Make sure 'home.jsx' file has correct case

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; // ✅ THIS IS MANDATORY for `import App from './App'` to work


