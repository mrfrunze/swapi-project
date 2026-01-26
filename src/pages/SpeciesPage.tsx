import { Link } from "react-router-dom";
import { ResourceListPage } from "./ResourceListPage";
import type { Species } from "../types/species";

export function SpeciesPage() {
  return (
    <ResourceListPage<Species>
      resource="species"
      renderItem={(specie) => (
        <Link
          key={specie.id}
          to={`/species/${specie.id}`}
          className="border p-3 rounded block hover:bg-gray-50"
        >
          {specie.name}
        </Link>
      )}
    />
  );
}