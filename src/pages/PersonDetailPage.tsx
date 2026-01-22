import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getById } from "../services/swapi.service";
import type { Person } from "../types/people";

export function PersonDetailPage() {
    const { id } = useParams();
    const [person, setPerson] = useState<Person | null>(null);

    useEffect(() => {
    if (!id) return;
    getById<Person>("people", id).then(setPerson);
  }, [id]);

  if (!person) return <div className="p-4">Loading…</div>;

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-2">
      <h1 className="text-xl font-bold">{person.name}</h1>
      <div>Birth year: {person.birth_year}</div>
      <div>Height: {person.height}</div>
      <div>Mass: {person.mass}</div>
    </div>
  );
}