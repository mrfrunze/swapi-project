import type { Person } from "../types/people";
import type { Film } from "../types/film";
import type { ResourceMap } from "../types/resources";

export type TypedResourceMap = ResourceMap & {
  people: Person;
  films: Film;
};
