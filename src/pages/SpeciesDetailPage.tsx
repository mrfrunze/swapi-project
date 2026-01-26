import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getById } from "../services/swapi.service";
import type { Species } from "../types/species";

export function SpeciesDetailPage() {
    const { id } = useParams<{ id: string }>();
    const [species, setSpecies] = useState<Species | null>(null);

    useEffect(() => {
        if (!id) return;
        getById<Species>("species", id).then(setSpecies);
    }, [id]);

    if (!species) return <div className="p-4">Loading…</div>;

    return (
        <div className="max-w-3xl mx-auto p-4 space-y-2">
            <h1 className="text-xl font-bold">{species.name}</h1>
            <div>Classification: {species.classification}</div>
            <div>Designation: {species.designation}</div>
            <div>Average height: {species.average_height}</div>
            <div>Average lifespan: {species.average_lifespan}</div>
            <div>Language: {species.language}</div>
        </div>
    );
}