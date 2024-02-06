import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}

export default App;
