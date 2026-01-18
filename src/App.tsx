import { Routes, Route, Navigate } from "react-router-dom";
import { PeoplePage } from "./pages/peoplePage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/people" replace />} />
        <Route path="/people" element={<PeoplePage/>} />
        <Route path="/films" element={<div className="p-4">Films page</div>} />
      </Routes>
    </>
  )
}

export default App
