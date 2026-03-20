import { Link } from "./Link";
export function Header(){
    return (
        <header className="border-b border-border bg-background py-2 px-4 flex items-center justify-between gap-8">
            <Link href="/" className="text-2xl leading-5 text-balance flex items-center gap-2">
                <svg className="size-8 text-primary-light" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                DevJobs
            </Link>

            <nav className="align-center gap-4 flex">
                <Link className="decoration-0 text-text-secondary transition-colors duration-200 font-medium hover:text-text-primary hover:outline-0 focus:text-text-primary focus:outline-0" href="/"> 
                    Inicio
                </Link>
                <Link className="decoration-0 text-text-secondary transition-colors duration-200 font-medium hover:text-text-primary hover:outline-0 focus:text-text-primary focus:outline-0" href="/employment">
                    Empleos
                </Link>
            </nav>

            <div>
                <devjobs-avatar service="github" username="agomzlo" size="32">
                </devjobs-avatar>
            </div>
        </header>
    );
}