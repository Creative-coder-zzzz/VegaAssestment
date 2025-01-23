import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddCaptions from "./pages/AddCaptions";
import NotFound from "./pages/NotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>

      <Route path="/add-caption" element={<AddCaptions />} />
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
