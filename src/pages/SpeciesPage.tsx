import { ResourceListPage } from "./ResourceListPage";
import type { Species } from "../types/species";
import { ResourceCard } from "../components/ResourceCard";

export function SpeciesPage() {
  return (
    <ResourceListPage<Species>
      resource="species"
      renderItem={(s) => <ResourceCard key={s.id} resource="species" item={s} />}
    />
  );
}