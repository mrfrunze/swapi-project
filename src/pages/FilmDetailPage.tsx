import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getById } from "../services/swapi.service";
import type { Film } from "../types/film";

export function FilmDetailPage() {
    const { id } = useParams();
    const [film, setFilm] = useState<Film | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        let active = true;

        getById<Film>("films", id)
            .then((data) => {
                if (!active) return;
                setFilm(data);
            })
            .catch((err) => {
                if (!active) return;
                setError(err instanceof Error ? err.message : "Error");
            });

        return () => {
            active = false;
        };
    }, [id]);

    if (error) return <div className="p-4 text-red-600">{error}</div>;
    if (!film) return <div className="p-4">Loading…</div>;

    return (
        <div className="max-w-3xl mx-auto p-4 space-y-2">
            <h1 className="text-xl font-bold">{film.title}</h1>
            {film.release_date && <div>Release: {film.release_date}</div>}
            {film.opening_crawl && <p className="whitespace-pre-line">{film.opening_crawl}</p>}
        </div>
    );

}
