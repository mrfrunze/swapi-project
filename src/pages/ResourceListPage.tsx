import { useEffect, useState, type JSX, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { getList } from "../services/swapi.service";
import type { ResourceType } from "../types/resources"
import { FiChevronLeft, FiChevronRight, FiSearch, FiX } from "react-icons/fi";


type Props<T> = {
    resource: ResourceType;
    renderItem: (item: T) => JSX.Element;
};

export function ResourceListPage<T>({ resource, renderItem }: Props<T>) {
    const [params, setParams] = useSearchParams();
    const page = Number(params.get("page") ?? 1);
    const query = params.get("query") ?? "";

    const inputRef = useRef<HTMLInputElement | null>(null);

    const [items, setItems] = useState<T[]>([]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState(query);
    const [hasNext, setHasNext] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setInputValue(query);
    }, [query]);
    useEffect(() => {
        let active = true;

        async function load() {
            setLoading(true);
            try {
                const res = await getList<T>(resource, { page, search: query });
                if (!active) return;
                setItems(res.results);
                setCount(res.count);
                setHasNext(Boolean(res.next));
            } catch (error) {
                if (!active) return;
                setError(error instanceof Error ? error.message : "Error");
            } finally {
                if (active) setLoading(false);
            }
        }

        load();

        return () => {
            active = false;
        };
    }, [resource, page, query]);

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-4">
            {loading && <div className="p-4">Loading…</div>}
            <div >
                <form
                    className="flex items-center border rounded overflow-hidden"
                    onSubmit={(e) => {
                        e.preventDefault();
                        setParams({ query: inputValue, page: "1" });
                        inputRef.current?.focus();
                    }}>
                    <input
                        className="flex-1 px-3 py-2 outline-none"
                        ref={inputRef}
                        placeholder="Enter your search query"
                        value={inputValue}
                        onKeyDown={(e) => {
                            if (e.key === "Escape") {
                                setInputValue("");
                                setParams({ query: "", page: "1" });
                            }
                        }}
                        onChange={(e) => setInputValue(e.target.value)}
                    />

                    {/* button Clear */}
                    <button
                        type="button"
                        className="px-3 py-2 text-gray-500 hover:text-black"
                        onClick={() => {
                            setInputValue("");
                            setParams({ query: "", page: "1" });
                        }}
                        aria-label="Clear search"
                    >
                        <FiX />
                    </button>

                    {/* button Search */}
                    <button
                        type="submit"
                        className="px-3 py-2 bg-gray-100 hover:bg-gray-200"
                        aria-label="Search"
                    >
                        <FiSearch />
                    </button>
                </form>
            </div>

            {error && (
                <div className="p-4 text-red-600 border border-red-200 rounded">
                    {error}
                </div>
            )}
            {!loading && items.length === 0 && (
                <div className="text-center text-gray-500 py-10">
                    No results
                </div>
            )}

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{items.map(renderItem)}</div>
            {count > items.length && (
                <div className="mt-6 flex items-center justify-between">
                    <button
                        className="px-3 py-2 rounded bg-blue-600 text-white disabled:opacity-50 cursor-pointer"
                        disabled={page <= 1}
                        onClick={() => setParams({ query, page: String(page - 1) })}
                    >
                        <FiChevronLeft size={18} />
                    </button>
                    <span className="text-sm text-gray-600">
                        Page {page} / {Math.ceil(count / 10)}
                    </span>
                    <button
                        className="px-3 py-2 rounded bg-blue-600 text-white disabled:opacity-50 cursor-pointer"
                        disabled={!hasNext}
                        onClick={() => setParams({ query, page: String(page + 1) })}
                    >
                        <FiChevronRight size={18} />
                    </button>

                </div>
            )}

        </div>
    )

}

