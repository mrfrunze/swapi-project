import { Link } from "react-router-dom";
import { ResourceListPage } from "./ResourceListPage";
import type { Planet } from "../types/planet";

export function PlanetsPage() {
  return (
    <ResourceListPage<Planet>
      resource="planets"
      renderItem={(p) => (
        <Link
          key={p.id}
          to={`/planets/${p.id}`}
          className="border p-3 rounded block hover:bg-gray-50"
        >
          {p.name}
        </Link>
      )}
    />
  );
}
