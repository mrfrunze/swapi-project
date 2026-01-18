import { useEffect } from "react";
import { getList } from "../services/swapi.service";
import type { Person } from "../types/people";

export function PeoplePage() {
    useEffect(() => {
        getList<Person>("people", { page: 1 })
          .then((data) => {
            console.log("DATA:", data);
            console.log("count:", data.count);
            console.log("first:", data.results?.[0]?.name);
          })
          .catch((error) => {
              console.error("API error:", error);
          });
    }, []);

    return <div>People</div>;
}
