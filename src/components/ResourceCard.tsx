import { Link } from "react-router-dom";
import type { ResourceMap, ResourceType } from "../types/resources";
import type { CardConfig } from "../config/resourceCards";
import { cardConfig } from "../config/resourceCards";
import type { ReactNode } from "react";
import { FiFilm, FiCalendar, FiUsers, FiMapPin, FiGlobe, FiCpu, FiBox } from "react-icons/fi";

const getCardConfig = <R extends ResourceType>(resource: R) =>
  cardConfig[resource] as CardConfig<ResourceMap[R]>;

type Props<R extends ResourceType> = {
  resource: R;
  item: ResourceMap[R];
};

export function ResourceCard<R extends ResourceType>({ resource, item }: Props<R>) {
  const config = getCardConfig(resource);
  const title = config.title(item);
  const image = config.image ? config.image(item) : null;

  const iconByLabel: Record<string, ReactNode> = {
    Episode: <FiFilm />,
    Released: <FiCalendar />,
    Characters: <FiUsers />,
    Homeworld: <FiMapPin />,
    Birth: <FiCalendar />,
    Climate: <FiGlobe />,
    Population: <FiUsers />,
    Class: <FiCpu />,
    Language: <FiGlobe />,
    Model: <FiCpu />,
    "In films": <FiFilm />,
  };

  const defaultIcon = <FiBox />;

  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
      {image && (
        <img src={image} alt={title} className="h-64 w-full object-cover" />
      )}

      <div className="p-3 space-y-2">
        <h3 className="font-semibold text-sm">{title}</h3>

        {config.fields.map((field) => {
          const value = field.value(item);
          if (value === null) return null;
          return (
            <div key={field.label} className="text-xs text-gray-600 flex items-center gap-1">
              {iconByLabel[field.label] ?? defaultIcon}
              <span>{field.label}:</span>
              <span>{value}</span>
            </div>
          );
        })}

        <Link
          to={`/${resource}/${item.id}`}
          className="inline-block text-xs px-3 py-1 rounded bg-blue-600 text-white"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}