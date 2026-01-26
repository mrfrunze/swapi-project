import { ResourceListPage } from "./ResourceListPage";
import type { Planet } from "../types/planet";
import { ResourceCard } from "../components/ResourceCard";

export function PlanetsPage() {
  return (
    <ResourceListPage<Planet>
      resource="planets"
      renderItem={(p) => <ResourceCard key={p.id} resource="planets" item={p} />}
    />
  );
}
