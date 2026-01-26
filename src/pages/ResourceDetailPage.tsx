import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { ResourceMap, ResourceType } from "../types/resources";
import { getById } from "../services/swapi.service";
import { DetailLayout } from "../components/DetailLayout";
import { detailConfig } from "../config/resourceDetails";

type Props<R extends ResourceType> = {
  resource: R;
};

export function ResourceDetailPage<R extends ResourceType>({ resource }: Props<R>) {
  const { id } = useParams<{ id: string }>();
  const [error, setError] = useState<string | null>(null);
  const [state, setState] = useState<{
    resource: ResourceType;
    data: ResourceMap[ResourceType];
  } | null>(null);

  useEffect(() => {
    if (!id) return;
    let active = true;

    getById<ResourceMap[R]>(resource, id)
      .then((res) => {
        if (!active) return;
        setState({ resource, data: res });
      })
      .catch((err) => {
        if (!active) return;
        setError(err instanceof Error ? err.message : "Error");
      });

    return () => {
      active = false;
    };
  }, [resource, id]);

  if (error) return <div className="p-4 text-red-600">{error}</div>;
  if (!state || state.resource !== resource) return <div className="p-4">Loading…</div>;

  const data = state.data as ResourceMap[R];
  const config = detailConfig[resource];
  return (

    <DetailLayout
      title={config.title(data)}
      imageUrl={config.image ? config.image(data) : null}
      attributes={config.attributes(data)}
      sections={config.sections(data)}
    />
  );
}