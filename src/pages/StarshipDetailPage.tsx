import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getById } from "../services/swapi.service";
import type { Starship } from "../types/starship";

export function StarshipDetailPage() {
    const { id } = useParams<{ id: string }>();
    const [starship, setStarship] = useState<Starship | null>(null);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        let active = true;
        if (!id) return;
        getById<Starship>("starships", id)
            .then((data) => {
                if (!active) return;
                setStarship(data);
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
    if (!starship) return <div className="p-4">Loading…</div>;

    return (
        <div className="max-w-3xl mx-auto p-4 space-y-2">
            <h1 className="text-xl font-bold">{starship.name}</h1>
            <div>Model: {starship.model}</div>
            <div>Manufacturer: {starship.manufacturer}</div>
            <div>Cost: {starship.cost_in_credits}</div>
            <div>Crew: {starship.crew}</div>
            <div>Passengers: {starship.passengers}</div>
            <div>Class: {starship.starship_class}</div>

            <div>
                <h3>Pilots</h3>
                <ul>
                    {starship.pilots.length === 0 && <li>None</li>}
                    {starship.pilots.map((p) => (
                        <li key={p.id}>
                            <Link to={`/people/${p.id}`}>{p.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3>Films</h3>
                <ul>
                    {starship.films.map((f) => (
                        <li key={f.id}>
                            <Link to={`/films/${f.id}`}>{f.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}