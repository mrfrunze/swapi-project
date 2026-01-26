import { NavLink } from 'react-router-dom'
import { mainNav } from '../config/navigation';
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const linkBase = "px-3 py-2 rounded text-sm transition hover:bg-gray-100";
const linkActive = "font-semibold text-blue-600 bg-gray-100";



export function Header() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return (
        <header className="border-b bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 h-14 flex justify-between items-center">
                {/* Logo left */}
                <NavLink to="/films" className="font-bold text-lg">
                    Star Wars Encyclopedia
                </NavLink>

                {/* Menu right */}

                <nav className="ml-auto gap-2 hidden md:flex">
                    {mainNav.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                isActive ? `${linkBase} ${linkActive}` : linkBase
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
                <button
                    className="relative z-50 md:hidden p-2 rounded border bg-white shadow"
                    onClick={() => setOpen((value) => !value)}
                    aria-label="Toggle menu"
                >
                    {open ? <FiX size={20} /> : <FiMenu size={20} />}
                </button>
                {open && (
                    <div
                        className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-white shadow-lg z-40 transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
                            }`}
                    >
                        <div className="pt-16 px-4 flex flex-col gap-2">
                            {mainNav.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        isActive ? `${linkBase} ${linkActive}` : linkBase
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
