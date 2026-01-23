import { NavLink, Outlet } from "react-router-dom";

const linkClass =
    "px-3 py-2 rounded hover:bg-gray-100";
const activeClass =
    "font-semibold text-blue-600 bg-gray-100";

export function Layout() {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="border-b">
                <nav className="max-w-7xl mx-auto px-4 py-3 flex gap-4">
                    <NavLink
                        to="/people"
                        className={({ isActive }) =>
                            isActive ? `${linkClass} ${activeClass}` : linkClass
                        }
                    >
                        People
                    </NavLink>

                    <NavLink
                        to="/films"
                        className={({ isActive }) =>
                            isActive ? `${linkClass} ${activeClass}` : linkClass
                        }
                    >
                        Films
                    </NavLink>

                    <NavLink
                        to="/planets"
                        className={({ isActive }) =>
                            isActive ? `${linkClass} ${activeClass}` : linkClass
                        }
                    >
                        Planets
                    </NavLink>
                </nav>
            </header>

            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    );
}