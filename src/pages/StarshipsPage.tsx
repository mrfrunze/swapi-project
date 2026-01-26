import { ResourceListPage } from "./ResourceListPage";
import type { Starship } from "../types/starship";
import { ResourceCard } from "../components/ResourceCard";

export function StarshipsPage() {
  return (
    <ResourceListPage<Starship>
      resource="starships"
      renderItem={(s) => <ResourceCard key={s.id} resource="starships" item={s} />}
    />
  );
}