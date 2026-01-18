import type { Film } from "./film";
import type { Person } from "./people";
import type { Planet } from "./planet";
import type { Species } from "./species";
import type { Starship } from "./starship";
import type { Vehicle } from "./vehicle";

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
  planets: Planet;
  species: Species;
  starships: Starship;
  vehicles: Vehicle;
};