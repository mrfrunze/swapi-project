import { Link } from "react-router-dom";
import type { Film } from "../types/film";

type Props = {
  film: Film;
};

export function FilmCard({ film }: Props) {
  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
      <div className="h-64 bg-gray-100">
        {film.image_url ? (
          <img
            src={film.image_url}
            alt={film.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-gray-400">
            No image
          </div>
        )}
      </div>

      <div className="p-3 space-y-2">
        <h3 className="font-semibold text-sm">{film.title}</h3>
        <div className="text-xs text-gray-600">Episode {film.episode_id}</div>
        <div className="text-xs text-gray-600">Released {film.release_date}</div>
        <div className="text-xs text-gray-600">
          {film.characters_count ?? "?"} characters
        </div>

        <Link
          to={`/films/${film.id}`}
          className="inline-block text-xs px-3 py-1 rounded bg-blue-600 text-white"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}