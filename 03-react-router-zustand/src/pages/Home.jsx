import { useRouter } from "../hooks/useRouter";

export default function HomePage() {
    const { navigateTo } = useRouter();

    const handleSearchSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const searchQuery = formData.get('search');
        
        const url = "/employment?text=" + encodeURIComponent(searchQuery);

        navigateTo(url);
    }

    return (
        <main>
            <section className="h-125 text-center flex flex-col justify-center items-center">
                <img className="absolute size-full object-cover -z-1 left-0 right-0 mask-b-from-5% mask-b-to-80% from-[#101922] to-[#10192200]" src="./background.webp" width="200" />

                <h1 className="text-2xl text-balance flex items-center gap-2 pt-9">Encuentra el trabajo de tus sueños</h1>

                <p className="text-balance mb-8">Únete a la comunidad más grande de desarrolladores y encuentra tu próxima oportunidad.</p>

                <form className="max-w-2xl w-full my-0 mx-auto px-4" role="search" onSubmit={handleSearchSubmit}>
                    <div className="flex flex-row bg-input-bg rounded-lg shadow-lg shadow-shadow p-2 gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                            <path d="M21 21l-6 -6" />
                        </svg>

                        <input
                            className="flex-1 bg-transparent border-none outline-none text-text-primary py-3 px-2 text-base placeholder:text-[#64748b]"
                            required
                            type="text"
                            placeholder="Buscar empleos por título, habilidad o empresa"
                            name="search"
                        />

                        <button
                            className="py-3 px-6 rounded-lg bg-primary font-normal border-none cursor-pointer transition-all duration-200 text-base whitespace-nowrap text-white hover:outline-2 hover:outline-solid hover:outline-white hover:outline-offset-2 hover:bg-primary-hover focus:outline-2 focus:outline-solid focus:outline-white focus:outline-offset-2 focus:bg-primary-hover active:scale-90 disabled:opacity-50 disabled:pointer-events-none"
                            type="submit"
                        >
                            Buscar
                        </button>
                    </div>
                </form>
            </section>

            <section className="px-4 bg-background pt-8">
                <header className="gap-0.5 flex-col">
                    <h2 className="mb-0 text-3xl font-bold text-text-primary">¿Por qué DevJobs?</h2>
                    <p className="opacity-75">DevJobs es la principal plataforma de búsqueda de empleo para desarrolladores. Conectamos a los mejores
                    talentos con las empresas más innovadoras.</p>
                </header>

                <footer className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 bg-background border-t border-solid border-border p-4 text-center">
                    <article className="bg-card-bg p-8 mb-4 rounded-lg shadow-lg shadow-shadow flex flex-col items-center">
                        <svg className="text-primary-light bg-[#0099ff4d] size-16 rounded-full p-4" fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true">
                            <path
                            d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z">
                            </path>
                        </svg>
                        <h3 className="font-medium">Encuentra el trabajo de tus sueños</h3>
                        <p className="text-text-muted">Busca miles de empleos de las mejores empresas de todo el mundo.</p>
                    </article>

                    <article className="bg-card-bg p-8 mb-4 rounded-lg shadow-lg shadow-shadow flex flex-col items-center">
                        <svg className="text-primary-light bg-[#0099ff4d] size-16 rounded-full p-4" fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true">
                            <path
                            d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z">
                            </path>
                        </svg>
                        <h3 className="font-medium">Conecta con las mejores empresas</h3>
                        <p className="text-text-muted">Conecta con empresas que están contratando por tus habilidades.</p>
                    </article>

                    <article className="bg-card-bg p-8 mb-4 rounded-lg shadow-lg shadow-shadow flex flex-col items-center">
                        <svg className="text-primary-light bg-[#0099ff4d] size-16 rounded-full p-4" fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true">
                            <path
                            d="M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z">
                            </path>
                        </svg>
                        <h3 className="font-medium">Obtén el salario que mereces</h3>
                        <p className="text-text-muted">Obtén el salario que mereces con nuestra calculadora de salarios.</p>
                    </article>
                </footer>
            </section>
        </main>
    )
}