import { Link } from "react-router-dom";
import type { Person } from "../types/people";
import { ResourceListPage } from "./ResourceListPage";


export function PeoplePage() {

    return (
        <ResourceListPage<Person>
            resource="people"
            renderItem={(p) => (
                <Link
                    to={`/people/${p.id}`}
                    key={p.id}
                    className="border p-3 rounded block hover:bg-gray-50"
                >
                    {p.name}
                </Link>

            )}
        />
    )
}
