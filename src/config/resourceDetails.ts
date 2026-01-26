import type { ResourceMap, ResourceType } from "../types/resources";

type DetailConfig<T> = {
  title: (item: T) => string;
  image?: (item: T) => string | null;
  attributes: (item: T) => Array<{ label: string; value: string | number }>;
  sections: (item: T) => Array<{ title: string; links: Array<{ label: string; to: string }> }>;
};

export const detailConfig: { [K in ResourceType]: DetailConfig<ResourceMap[K]> } = {
  films: {
    title: (f) => f.title,
    image: (f) => f.image_url ?? null,
    attributes: (f) => [
      { label: "Episode", value: f.episode_id },
      { label: "Director", value: f.director },
      { label: "Producer", value: f.producer },
      { label: "Release", value: f.release_date },
    ],
    sections: (f) => [
      { title: "Characters", links: f.characters.map((p) => ({ label: p.name, to: `/people/${p.id}` })) },
      { title: "Planets", links: f.planets.map((p) => ({ label: p.name, to: `/planets/${p.id}` })) },
      { title: "Starships", links: f.starships.map((s) => ({ label: s.name, to: `/starships/${s.id}` })) },
      { title: "Vehicles", links: f.vehicles.map((v) => ({ label: v.name, to: `/vehicles/${v.id}` })) },
      { title: "Species", links: f.species.map((s) => ({ label: s.name, to: `/species/${s.id}` })) },
    ],
  },

  people: {
    title: (p) => p.name,
    attributes: (p) => [
      { label: "Birth year", value: p.birth_year },
      { label: "Height", value: p.height },
      { label: "Mass", value: p.mass },
    ],
    sections: (p) => [
      {
        title: "Homeworld",
        links: p.homeworld ? [{ label: p.homeworld.name, to: `/planets/${p.homeworld.id}` }] : [],
      },
      { title: "Films", links: p.films.map((f) => ({ label: f.title, to: `/films/${f.id}` })) },
      { title: "Starships", links: p.starships.map((s) => ({ label: s.name, to: `/starships/${s.id}` })) },
      { title: "Vehicles", links: p.vehicles.map((v) => ({ label: v.name, to: `/vehicles/${v.id}` })) },
      { title: "Species", links: p.species.map((s) => ({ label: s.name, to: `/species/${s.id}` })) },
    ],
  },

  planets: {
    title: (p) => p.name,
    attributes: (p) => [
      { label: "Climate", value: p.climate },
      { label: "Population", value: p.population },
      { label: "Gravity", value: p.gravity },
    ],
    sections: (p) => [
      { title: "Residents", links: p.residents.map((r) => ({ label: r.name, to: `/people/${r.id}` })) },
      { title: "Films", links: p.films.map((f) => ({ label: f.title, to: `/films/${f.id}` })) },
    ],
  },

  species: {
    title: (s) => s.name,
    attributes: (s) => [
      { label: "Classification", value: s.classification },
      { label: "Designation", value: s.designation },
      { label: "Average height", value: s.average_height },
      { label: "Average lifespan", value: s.average_lifespan },
      { label: "Language", value: s.language },
    ],
    sections: (s) => [
      {
        title: "Homeworld",
        links: s.homeworld ? [{ label: s.homeworld.name, to: `/planets/${s.homeworld.id}` }] : [],
      },
      { title: "People", links: s.people.map((p) => ({ label: p.name, to: `/people/${p.id}` })) },
      { title: "Films", links: s.films.map((f) => ({ label: f.title, to: `/films/${f.id}` })) },
    ],
  },

  starships: {
    title: (s) => s.name,
    attributes: (s) => [
      { label: "Model", value: s.model },
      { label: "Manufacturer", value: s.manufacturer },
      { label: "Cost", value: s.cost_in_credits },
      { label: "Crew", value: s.crew },
      { label: "Passengers", value: s.passengers },
      { label: "Class", value: s.starship_class },
    ],
    sections: (s) => [
      { title: "Pilots", links: s.pilots.map((p) => ({ label: p.name, to: `/people/${p.id}` })) },
      { title: "Films", links: s.films.map((f) => ({ label: f.title, to: `/films/${f.id}` })) },
    ],
  },

  vehicles: {
    title: (v) => v.name,
    attributes: (v) => [
      { label: "Model", value: v.model },
      { label: "Manufacturer", value: v.manufacturer },
      { label: "Cost", value: v.cost_in_credits },
      { label: "Crew", value: v.crew },
      { label: "Passengers", value: v.passengers },
      { label: "Class", value: v.vehicle_class },
    ],
    sections: (v) => [
      { title: "Pilots", links: v.pilots.map((p) => ({ label: p.name, to: `/people/${p.id}` })) },
      { title: "Films", links: v.films.map((f) => ({ label: f.title, to: `/films/${f.id}` })) },
    ],
  },
};