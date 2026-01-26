import { ResourceListPage } from "./ResourceListPage";
import { ResourceCard } from "../components/ResourceCard";
import type { Film } from "../types/film";

export function FilmsPage() {
  return (
    <ResourceListPage<Film>
      resource="films"
      renderItem={(f) => <ResourceCard key={f.id} resource="films" item={f} />}
    />
  );
}
