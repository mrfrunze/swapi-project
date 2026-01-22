import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getById } from "../services/swapi.service";
import type { Planet } from "../types/planet";

export function PlanetDetailPage() {
    const { id } = useParams();
    const [error, setError] = useState<string | null>(null);
    const [planet, setPlanet] = useState<Planet | null>(null);

    useEffect(() => {
        let active = true;
        if (!id) return;
        getById<Planet>("planets", id)
            .then((data) => {
                if (!active) return;
                setPlanet(data);
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
    if (!planet) return <div className="p-4">Loading…</div>;


    return (
        <div className="max-w-3xl mx-auto p-4 space-y-2">
            <h1 className="text-xl font-bold">{planet.name}</h1>
            {planet.climate && <div>Climate: {planet.climate}</div>}
            {planet.population && <div>Population: {planet.population}</div>}
        </div>
    );


}