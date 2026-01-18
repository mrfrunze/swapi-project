import type { BaseResource } from "./base";

export interface Film extends BaseResource {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;

  characters: string[];
  planets: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
}
