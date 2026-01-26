import { Routes, Route, Navigate } from "react-router-dom";
import { PeoplePage } from "./pages/PeoplePage";
import { PersonDetailPage } from "./pages/PersonDetailPage";
import { FilmDetailPage } from "./pages/FilmDetailPage";
import { PlanetDetailPage } from "./pages/PlanetDetailPage";
import { FilmsPage } from "./pages/FilmsPage";
import { PlanetsPage } from "./pages/PlanetsPage";
import { Layout } from "./layouts/Layout";
import { SpeciesPage } from "./pages/SpeciesPage";
import { StarshipsPage } from "./pages/StarshipsPage";
import { VehiclesPage } from "./pages/VehiclesPage";
import { SpeciesDetailPage } from "./pages/SpeciesDetailPage";
import { StarshipDetailPage } from "./pages/StarshipDetailPage";
import { VehicleDetailPage } from "./pages/VehicleDetailPage";

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/people" replace />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/people/:id" element={<PersonDetailPage />} />
          <Route path="/films" element={<FilmsPage />} />
          <Route path="/films/:id" element={<FilmDetailPage />} />
          <Route path="/planets" element={<PlanetsPage />} />
          <Route path="/planets/:id" element={<PlanetDetailPage />} />
          <Route path="/species" element={<SpeciesPage />} />
          <Route path="/species/:id" element={<SpeciesDetailPage />} />
          <Route path="/starships" element={<StarshipsPage />} />
          <Route path="/starships/:id" element={<StarshipDetailPage />} />
          <Route path="/vehicles" element={<VehiclesPage />} />
          <Route path="/vehicles/:id" element={<VehicleDetailPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
