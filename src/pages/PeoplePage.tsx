
import type { Person } from "../types/people";
import { ResourceListPage } from "./ResourceListPage";
import { ResourceCard } from "../components/ResourceCard";


export function PeoplePage() {

    return (
        <ResourceListPage<Person>
            resource="people"
            renderItem={(p) => <ResourceCard key={p.id} resource="people" item={p} />}
        />
    )
}
