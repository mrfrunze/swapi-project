import type { BaseResource } from "./base";

export interface Vehicle extends BaseResource {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;

  pilots: Array<{ id: number; name: string }>;
  films: Array<{ id: number; title: string }>;
}
