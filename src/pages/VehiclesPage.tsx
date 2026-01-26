import { Link } from "react-router-dom";
import { ResourceListPage } from "./ResourceListPage";
import type { Vehicle } from "../types/vehicle";

export function VehiclesPage() {
  return (
    <ResourceListPage<Vehicle>
      resource="vehicles"
      renderItem={(veh) => (
        <Link
          key={veh.id}
          to={`/vehicles/${veh.id}`}
          className="border p-3 rounded block hover:bg-gray-50"
        >
          {veh.name}
        </Link>
      )}
    />
  );
}