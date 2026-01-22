import { Routes, Route, Navigate } from "react-router-dom";
import { PeoplePage } from "./pages/PeoplePage";
import { PersonDetailPage } from "./pages/PersonDetailPage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/people" replace />} />
        <Route path="/people" element={<PeoplePage/>} />
        <Route path="/people/:id" element={<PersonDetailPage />} />
        <Route path="/films" element={<div className="p-4">Films page</div>} />
      </Routes>
    </>
  )
}

export default App
