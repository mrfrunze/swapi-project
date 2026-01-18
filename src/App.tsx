import { Routes, Route, Navigate } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/people" replace />} />
        <Route path="/people" element={
          <div className="p-4 md:p-8 max-w-7xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold">
              Star Wars Encyclopedia
            </h1>
          </div>
        } />
        <Route path="/films" element={<div className="p-4">Films page</div>} />
      </Routes>
    </>
  )
}

export default App
