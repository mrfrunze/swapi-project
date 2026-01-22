import { useParams, Link } from "react-router-dom";
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

            {person.homeworld && (
                <div>
                    Homeworld:{" "}
                    <Link to={`/planets/${person.homeworld.id}`}>
                        {person.homeworld.name}
                    </Link>
                </div>
            )}
            <div>
                <h3>Films</h3>
                <ul>
                    {person.films.map((film) => (
                        <li key={film.id}>
                            <Link to={`/films/${film.id}`}>{film.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Starships</h3>
                <ul>
                    {person.starships.length === 0 && <li>None</li>}
                    {person.starships.map((ship) => (
                        <li key={ship.id}>
                            <Link to={`/starships/${ship.id}`}>{ship.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Vehicles</h3>
                <ul>
                    {person.vehicles.length === 0 && <li>None</li>}
                    {person.vehicles.map((vehicle) => (
                        <li key={vehicle.id}>
                            <Link to={`/vehicles/${vehicle.id}`}>{vehicle.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Species</h3>
                <ul>
                    {person.species.length === 0 && <li>None</li>}
                    {person.species.map((species) => (
                        <li key={species.id}>
                            <Link to={`/species/${species.id}`}>{species.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}