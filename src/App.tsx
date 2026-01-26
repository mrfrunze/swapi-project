import { Routes, Route, Navigate } from "react-router-dom";
import { PeoplePage } from "./pages/PeoplePage";
import { FilmsPage } from "./pages/FilmsPage";
import { PlanetsPage } from "./pages/PlanetsPage";
import { Layout } from "./layouts/Layout";
import { SpeciesPage } from "./pages/SpeciesPage";
import { StarshipsPage } from "./pages/StarshipsPage";
import { VehiclesPage } from "./pages/VehiclesPage";
import { ResourceDetailPage } from "./pages/ResourceDetailPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/people" replace />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/people/:id" element={<ResourceDetailPage resource="people" />} />
          <Route path="/films" element={<FilmsPage />} />
          <Route path="/films/:id" element={<ResourceDetailPage resource="films" />} />
          <Route path="/planets" element={<PlanetsPage />} />
          <Route path="/planets/:id" element={<ResourceDetailPage resource="planets" />} />
          <Route path="/species" element={<SpeciesPage />} />
          <Route path="/species/:id" element={<ResourceDetailPage resource="species" />} />
          <Route path="/starships" element={<StarshipsPage />} />
          <Route path="/starships/:id" element={<ResourceDetailPage resource="starships" />} />
          <Route path="/vehicles" element={<VehiclesPage />} />
          <Route path="/vehicles/:id" element={<ResourceDetailPage resource="vehicles" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
