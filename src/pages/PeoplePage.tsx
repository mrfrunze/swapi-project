
import type { Person } from "../types/people";
import { ResourceListPage } from "./ResourceListPage";


export function PeoplePage() {

    return (
        <ResourceListPage<Person>
            resource="people"
            renderItem={(p) => (
                <div key={p.id} className="border p-3 rounded">
                    {p.name}
                </div>
            )}
        />
    )
}
