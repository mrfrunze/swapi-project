import { useEffect, useState, type JSX } from "react";
import { useSearchParams } from "react-router-dom";
import { getList } from "../services/swapi.service";
import type { ResourceType } from "../types/resources"

type Props<T> = {
    resource: ResourceType;
    renderItem: (item: T) => JSX.Element;
};

export function ResourceListPage<T>({ resource, renderItem }: Props<T>) {
    const [params, setParams] = useSearchParams();
    const page = Number(params.get("page") ?? 1);
    const query = params.get("query") ?? "";

    const [items, setItems] = useState<T[]>([]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);

   useEffect(() => {
    let active = true;

    async function load() {
        setLoading(true);
        try {
            const res = await getList<T>(resource, { page, search: query });
            if (!active) return;
            setItems(res.results);
            setCount(res.count);
        } finally {
            if (active) setLoading(false);
        }
    }

    load();

    return () => {
        active = false;
    };
}, [resource, page, query]);


    if (loading) return <div className="p-4">Loading…</div>;

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-4">
            <input
                className="border p-2 w-full"
                placeholder="Search…"
                value={query}
                onChange={(e) => setParams({ query: e.target.value, page: "1" })}
            />

            <div className="grid gap-3">{items.map(renderItem)}</div>

            <div className="flex gap-2 items-center">
                <button
                    disabled={page <= 1}
                    onClick={() => setParams({ query, page: String(page - 1) })}
                >
                    Prev
                </button>
                <span>Page {page}</span>
                <button
                    disabled={items.length === 0}
                    onClick={() => setParams({ query, page: String(page + 1) })}
                >
                    Next
                </button>
                <span>Total: {count}</span>
            </div>
        </div>
    )

}

