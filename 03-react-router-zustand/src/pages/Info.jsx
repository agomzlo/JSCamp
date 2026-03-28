import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Loading } from "../components/Loading";
import { Link } from "../components/Link";
import snarkdown from "snarkdown";
import { useAuthStore } from "../store/authStore";
import { useFavoritesStore } from "../store/favStore";

function InfoApplyButton(){
    const { isLoggedIn } = useAuthStore();

    return (
        <button     
            disabled={!isLoggedIn} 
            className="w-full bg-primary-light text-white border-none font-semibold py-3 px-8 rounded-lg mb-12 transition-colors duration-200 cursor-pointer text-base whitespace-nowrap hover:outline-2 hover:outline-solid hover:outline-white hover:outline-offset-2 hover:bg-[#0088e6] focus:outline-2 focus:outline-solid focus:outline-white focus:outline-offset-2 focus:bg-primary-hover active:scale-90 disabled:bg-[#666] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-[#666] sm:w-auto"
        >
            {
                isLoggedIn ? "Aplicar ahora" : "Inicia sesión para aplicar"
            }
        </button>
    )
}

function InfoFavoriteButton({ jobId }){
    const { toggleFavorite, isInFavorites } = useFavoritesStore();
    const { isLoggedIn } = useAuthStore();

    return (
        <button
            disabled={!isLoggedIn}
            className="w-full bg-primary-light text-white border-none font-semibold py-3 px-8 rounded-lg mb-12 transition-colors duration-200 cursor-pointer text-base whitespace-nowrap hover:outline-2 hover:outline-solid hover:outline-white hover:outline-offset-2 hover:bg-[#0088e6] focus:outline-2 focus:outline-solid focus:outline-white focus:outline-offset-2 focus:bg-primary-hover active:scale-90 disabled:bg-[#666] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-[#666] sm:w-auto"
            onClick={() => toggleFavorite(jobId)}
        >
            {
                isInFavorites(jobId) ? '❤️' : '🤍'
            }
        </button>
    )
}

function JobSection({ title, content }){
    const contentHtml = snarkdown(content);

    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
                {title}
            </h2>
            <div className="text-text-secondary" dangerouslySetInnerHTML={{
                __html: contentHtml
            }} />
        </section>
    )
}

function JobNotFound(){
    const navigate = useNavigate();

    return (
        <div className="max-w-7xl mx-auto my-0 px-4 py-0">
            <div className="py-20 text-center">
                <h2 className="text-2xl font-bold text-text-primary mb-4">Oferta de trabajo no encontrada</h2>
                <button
                    className="bg-primary-light bg-none border-none cursor-pointer text-base py-3 px-6 rounded-lg font-normal transition-all duration-200 whitespace-nowrap text-white hover:outline-2 hover:outline-solid hover:outline-white hover:outline-offset-2 hover:bg-primary-hover hover:underline focus:outline-2 focus:outline-solid focus:outline-white focus:outline-offset-2 focus:bg-primary-hover active:scale-90 disabled:opacity-50 disabled:pointer-events-none"
                    onClick={() => navigate('/')}
                >
                    Volver al inicio
                </button>
            </div>
        </div>
    )
}

export default function JobInfoPage(){
    const { jobId } = useParams();

    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`https://jscamp-api.vercel.app/api/jobs/${jobId}`)
        .then(response => {
            if(response.ok) return response.json();
            throw new Error(`Job with id: ${jobId} not found`);
        })
        .then(json => {
            setJob(json);
        })
        .catch(error => {
            setError(error.message);
        })
        .finally(() => {
            setLoading(false)
        })
    }, [jobId]);


    if(loading) return <Loading />;

    if(error) return <JobNotFound />;

    return (
        <div className="max-w-7xl w-full mx-auto my-0 px-4 py-0">
             <div className="py-8 max-w-5xl w-full mx-auto my-0">
                <nav className="text-sm flex flex-row gap-2 items-center text-text-muted mb-8">
                    <Link
                        href="/employment"
                        className="bg-none border-none text-inherit cursor-pointer p-0 hover:text-text-primary"
                    >
                        Empleos
                    </Link>
                    <span className="mx-0 my-2">/</span>
                    <span className="text-text-primary">{job.titulo}</span>
                </nav>
             </div>

             <header className="mb-8 flex flex-row flex-wrap justify-between items-center">
                <h1 className="text-4xl font-bold text-text-primary mb-4 text-balance flex items-center gap-2">
                    {job.titulo}
                </h1>
                <p className="text-base text-text-secondary text-balance mb-8">
                    {job.empresa} - {job.ubicacion}
                </p>
             </header>
             <span className="flex flex-row gap-4 ">
                <InfoApplyButton />
                <InfoFavoriteButton jobId={job.id} />
             </span>

             <JobSection title="Descripción del puesto" content={job.content.description} />
             <JobSection title="Resposabilidades" content={job.content.responsibilities} />
             <JobSection title="Requisitos" content={job.content.requirements} />
             <JobSection title="Acerca de la empresa" content={job.content.about} />
        </div>
    )
}