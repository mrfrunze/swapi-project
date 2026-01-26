import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getById } from "../services/swapi.service";
import type { Starship } from "../types/starship";

export function StarshipDetailPage() {
    const { id } = useParams<{ id: string }>();
    const [starship, setStarship] = useState<Starship | null>(null);

    useEffect(() => {
        if (!id) return;
        getById<Starship>("starships", id).then(setStarship);
    }, [id]);

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
        </div>
    );
}