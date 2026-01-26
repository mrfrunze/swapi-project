import type { BaseResource } from "./base";

export interface Film extends BaseResource {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  image_url?: string;
  characters_count?: number;

  characters: Array<{ id: number; name: string }>;
  planets: Array<{ id: number; name: string }>;
  starships: Array<{ id: number; name: string }>;
  vehicles: Array<{ id: number; name: string }>;
  species: Array<{ id: number; name: string }>;
}
