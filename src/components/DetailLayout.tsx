import { Link } from "react-router-dom";

type DetailAttribute = {
    label: string;
    value: string | number;
};

type DetailLink = {
    label: string;
    to: string;
};

type DetailSection = {
    title: string;
    links: DetailLink[];
};

type DetailLayoutProps = {
    title: string;
    imageUrl?: string | null;
    attributes: DetailAttribute[];
    sections: DetailSection[];
};

export function DetailLayout({
    title,
    imageUrl,
    attributes,
    sections,
}: DetailLayoutProps) {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="bg-white border rounded-lg p-4 space-y-6">
                <h1 className="text-2xl font-bold">{title}</h1>

                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full max-h-[520px] object-cover rounded"
                    />
                )}

                <div className="space-y-2">
                    <h2 className="text-lg font-semibold">Attributes</h2>
                    <ul className="space-y-1 text-sm">
                        {attributes.map((attr) => (
                            <li key={attr.label}>
                                <span className="font-medium">{attr.label}:</span> {attr.value}
                            </li>
                        ))}
                    </ul>
                </div>

                {sections.map((section) => (
                    <div key={section.title} className="space-y-2">
                        <h3 className="text-lg font-semibold">{section.title}</h3>
                        <ul className="space-y-1 text-sm">
                            {section.links.map((link) => (
                                <li key={link.to}>
                                    <Link to={link.to} className="block border rounded px-3 py-2 text-sm text-blue-700 hover:bg-blue-50">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}