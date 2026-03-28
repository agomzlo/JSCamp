import { NavLink } from "react-router";
import { Link } from "./Link";
import { useAuthStore } from "../store/authStore";
import { useFavoritesStore } from "../store/favStore";

function LogInButton() {
    return (
        <NavLink
            className="py-3 px-6 rounded-lg bg-primary font-normal border-none cursor-pointer transition-all duration-200 text-base whitespace-nowrap text-white hover:outline-2 hover:outline-solid hover:outline-white hover:outline-offset-2 hover:bg-primary-hover focus:outline-2 focus:outline-solid focus:outline-white focus:outline-offset-2 focus:bg-primary-hover active:scale-90 disabled:opacity-50 disabled:pointer-events-none"
            to="/login"
        >
            Iniciar sesión
        </NavLink>
    )
}

function LogOutButton() {
    const { logout } = useAuthStore();
    const { clearFavorites } = useFavoritesStore();

    const handleLogout = () => {
        logout();
        clearFavorites();
    }

    return (
        <button
            className="py-3 px-6 rounded-lg bg-primary font-normal border-none cursor-pointer transition-all duration-200 text-base whitespace-nowrap text-white hover:outline-2 hover:outline-solid hover:outline-white hover:outline-offset-2 hover:bg-primary-hover focus:outline-2 focus:outline-solid focus:outline-white focus:outline-offset-2 focus:bg-primary-hover active:scale-90 disabled:opacity-50 disabled:pointer-events-none"
            onClick={handleLogout}
        >
            Cerrar sesión
        </button>
    )
}

export function Header() {
    const { isLoggedIn } = useAuthStore();
    const { countFavorites } = useFavoritesStore();
    const totalFavorites = countFavorites();

    return (
        <header className="border-b border-border bg-background py-4 px-8 flex items-center justify-between gap-8">
            <Link href="/" className="text-2xl leading-5 text-balance flex items-center gap-2">
                <svg className="size-8 text-primary-light" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                DevJobs
            </Link>

            <nav className="align-center gap-4 flex">
                <NavLink
                    className={({isActive}) => `${isActive ? "text-primary-light font-bold pointer-events-none" : "text-text-secondary"} decoration-0 transition-colors duration-200 font-medium hover:text-text-primary hover:outline-0 focus:text-text-primary focus:outline-0`}
                    to="/"
                > 
                    Inicio
                </NavLink>
                <NavLink
                    className={({isActive}) => `${isActive ? "text-primary-light font-bold pointer-events-none" : "text-text-secondary"} decoration-0 transition-colors duration-200 font-medium hover:text-text-primary hover:outline-0 focus:text-text-primary focus:outline-0`}
                    to="/employment"
                >
                    Empleos
                </NavLink>
                {
                    isLoggedIn && (
                        <NavLink
                            className={({isActive}) => `${isActive ? "text-primary-light font-bold pointer-events-none" : "text-text-secondary"} decoration-0 transition-colors duration-200 font-medium hover:text-text-primary hover:outline-0 focus:text-text-primary focus:outline-0`}
                            to="/profile"
                        >
                            Perfil (❤️ {totalFavorites})
                        </NavLink>
                    )
                }
            </nav>

            {
                isLoggedIn ? (
                    <LogOutButton />
                ) : (
                    <LogInButton />
                )
            }
        </header>
    );
}