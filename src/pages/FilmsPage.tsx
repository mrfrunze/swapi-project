import { Link } from "react-router-dom";
import { ResourceListPage } from "./ResourceListPage";
import type { Film } from "../types/film";

export function FilmsPage() {
  return (
    <ResourceListPage<Film>
      resource="films"
      renderItem={(f) => (
        <Link
          key={f.id}
          to={`/films/${f.id}`}
          className="border p-3 rounded block hover:bg-gray-50"
        >
          {f.title}
        </Link>
      )}
    />
  );
}
