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

  homeworld: { id: number; name: string };
  films: Array<{ id: number; title: string }>;
  species: Array<{ id: number; name: string }>;
  starships: Array<{ id: number; name: string }>;
  vehicles: Array<{ id: number; name: string }>;
}
