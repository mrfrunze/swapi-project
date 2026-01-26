import type { ResourceMap, ResourceType } from "../types/resources";

export type CardField<T> = {
  label: string;
  value: (item: T) => string | number | null;
};

export type CardConfig<T> = {
  title: (item: T) => string;
  image?: (item: T) => string | null;
  fields: Array<CardField<T>>;
};

export const cardConfig: { [K in ResourceType]: CardConfig<ResourceMap[K]> } = {
  films: {
    title: (f) => f.title,
    image: (f) => f.image_url ?? null,
    fields: [
      { label: "Episode", value: (f) => f.episode_id },
      { label: "Released", value: (f) => f.release_date },
      { label: "Characters", value: (f) => f.characters_count ?? "?" },
    ],
  },
  people: {
    title: (p) => p.name,
    fields: [
      { label: "Birth", value: (p) => p.birth_year },
      { label: "Homeworld", value: (p) => p.homeworld?.name ?? "Unknown" },
      { label: "In films", value: (p) => p.films_count },
    ],
  },
  planets: {
    title: (p) => p.name,
    fields: [
      { label: "Climate", value: (p) => p.climate },
      { label: "Population", value: (p) => p.population },
    ],
  },
  species: {
    title: (s) => s.name,
    fields: [
      { label: "Class", value: (s) => s.classification },
      { label: "Language", value: (s) => s.language },
    ],
  },
  starships: {
    title: (s) => s.name,
    fields: [
      { label: "Model", value: (s) => s.model },
      { label: "Class", value: (s) => s.starship_class },
    ],
  },
  vehicles: {
    title: (v) => v.name,
    fields: [
      { label: "Model", value: (v) => v.model },
      { label: "Class", value: (v) => v.vehicle_class },
    ],
  },
};
