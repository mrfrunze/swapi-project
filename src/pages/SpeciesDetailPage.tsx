import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getById } from "../services/swapi.service";
import type { Species } from "../types/species";

export function SpeciesDetailPage() {
    const { id } = useParams<{ id: string }>();
    const [species, setSpecies] = useState<Species | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let active = true;
        if (!id) return;
        getById<Species>("species", id)
            .then((data) => {
                if (!active) return;
                setSpecies(data);
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
    if (!species) return <div className="p-4">Loading…</div>;

    return (
        <div className="max-w-3xl mx-auto p-4 space-y-2">
            <h1 className="text-xl font-bold">{species.name}</h1>
            <div>Classification: {species.classification}</div>
            <div>Designation: {species.designation}</div>
            <div>Average height: {species.average_height}</div>
            <div>Average lifespan: {species.average_lifespan}</div>
            <div>Language: {species.language}</div>

            {species.homeworld && (
                <div>
                    Homeworld:{" "}
                    <Link to={`/planets/${species.homeworld.id}`}>
                        {species.homeworld.name}
                    </Link>
                </div>
            )}

            <div>
                <h3>People</h3>
                <ul>
                    {species.people.map((p) => (
                        <li key={p.id}>
                            <Link to={`/people/${p.id}`}>{p.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3>Films</h3>
                <ul>
                    {species.films.map((f) => (
                        <li key={f.id}>
                            <Link to={`/films/${f.id}`}>{f.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}