import { Person } from "./people";
import { Film } from "./film";

export type ResourceType =
  | "people"
  | "films"
  | "planets"
  | "species"
  | "starships"
  | "vehicles";

export type ResourceMap = {
  people: Person;
  films: Film;
  planets: unknown;
  species: unknown;
  starships: unknown;
  vehicles: unknown;
};