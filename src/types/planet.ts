import type { BaseResource } from "./base";

export interface Planet extends BaseResource {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;

  residents: Array<{ id: number; name: string }>;
  films: Array<{ id: number; title: string }>;
}
