import { Link } from "react-router-dom";
import { ResourceListPage } from "./ResourceListPage";
import type { Starship } from "../types/starship";

export function StarshipsPage() {
  return (
    <ResourceListPage<Starship>
      resource="starships"
      renderItem={(star) => (
        <Link
          key={star.id}
          to={`/starships/${star.id}`}
          className="border p-3 rounded block hover:bg-gray-50"
        >
          {star.name}
        </Link>
      )}
    />
  );
}