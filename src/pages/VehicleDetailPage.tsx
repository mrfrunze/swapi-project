import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getById } from "../services/swapi.service";
import type { Vehicle } from "../types/vehicle";

export function VehicleDetailPage() {
    const { id } = useParams<{ id: string }>();
    const [vehicle, setVehicle] = useState<Vehicle | null>(null);

    useEffect(() => {
        if (!id) return;
        getById<Vehicle>("vehicles", id).then(setVehicle);
    }, [id]);

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
        </div>
    );
}