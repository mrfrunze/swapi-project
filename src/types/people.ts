import type { BaseResource } from "./base";

export interface Person extends BaseResource {
  id: number;
  name: string;
  birth_year: string;
  eye_color: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;

  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
}
