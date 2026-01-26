import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getById } from "../services/swapi.service";
import type { Vehicle } from "../types/vehicle";

export function VehicleDetailPage() {
    const { id } = useParams<{ id: string }>();
    const [vehicle, setVehicle] = useState<Vehicle | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let active = true;
        if (!id) return;
        getById<Vehicle>("vehicles", id)
            .then((data) => {
                if (!active) return;
                setVehicle(data);
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
    if (!vehicle) return <div className="p-4">Loading…</div>;

    return (
        <div className="max-w-3xl mx-auto p-4 space-y-2">
            <h1 className="text-xl font-bold">{vehicle.name}</h1>
            <div>Model: {vehicle.model}</div>
            <div>Manufacturer: {vehicle.manufacturer}</div>
            <div>Cost: {vehicle.cost_in_credits}</div>
            <div>Crew: {vehicle.crew}</div>
            <div>Passengers: {vehicle.passengers}</div>
            <div>Class: {vehicle.vehicle_class}</div>

            <div>
                <h3>Pilots</h3>
                <ul>
                    {vehicle.pilots.length === 0 && <li>None</li>}
                    {vehicle.pilots.map((p) => (
                        <li key={p.id}>
                            <Link to={`/people/${p.id}`}>{p.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3>Films</h3>
                <ul>
                    {vehicle.films.map((f) => (
                        <li key={f.id}>
                            <Link to={`/films/${f.id}`}>{f.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}