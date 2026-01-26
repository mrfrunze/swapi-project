import { ResourceListPage } from "./ResourceListPage";
import type { Vehicle } from "../types/vehicle";
import { ResourceCard } from "../components/ResourceCard";

export function VehiclesPage() {
  return (
    <ResourceListPage<Vehicle>
      resource="vehicles"
      renderItem={(v) => <ResourceCard key={v.id} resource="vehicles" item={v} />}
    />
  );
}