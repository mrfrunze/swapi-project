import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="max-w-3xl mx-auto p-8 text-center space-y-4">
      <h1 className="text-2xl font-bold">404 — Page not found</h1>
      <p className="text-gray-600">The page you are looking for doesn’t exist.</p>
      <Link to="/people" className="text-blue-600 hover:underline">
        Go to People
      </Link>
    </div>
  );
}