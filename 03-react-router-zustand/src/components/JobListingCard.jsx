import { useState } from "react"
import { Link } from "./Link";
import { useFavoritesStore } from "../store/favStore";
import { useAuthStore } from "../store/authStore";

function JobCardApplyButton() {
  const [isApplied, setIsApplied] = useState(false);
  const buttonText = isApplied ? "Aplicado" : "Aplicar";
  const buttonClass = isApplied ? "bg-[#4caf50] pointer-events-none" : "bg-primary-light";
  const { isLoggedIn } = useAuthStore();
  
  return (
    <button
      className={`py-3 px-6 rounded-lg font-normal border-none cursor-pointer transition-all duration-200 text-base whitespace-nowrap text-white hover:outline-2 hover:outline-solid hover:outline-white hover:outline-offset-2 hover:bg-primary-hover focus:outline-2 focus:outline-solid focus:outline-white focus:outline-offset-2 focus:bg-primary-hover active:scale-90 disabled:opacity-50 disabled:pointer-events-none ${buttonClass}`}
      disabled={!isLoggedIn}
      onClick={() => setIsApplied(true)}
    >
      {buttonText}
    </button>
  )
}

function JobCardFavoriteButton({ jobId }){
  const { toggleFavorite, isInFavorites } = useFavoritesStore();
  const { isLoggedIn } = useAuthStore();

  return (
    <button
      className="py-3 px-6 rounded-lg bg-primary font-normal border-none cursor-pointer transition-all duration-200 text-base whitespace-nowrap text-white hover:outline-2 hover:outline-solid hover:outline-white hover:outline-offset-2 hover:bg-primary-hover focus:outline-2 focus:outline-solid focus:outline-white focus:outline-offset-2 focus:bg-primary-hover active:scale-90 disabled:opacity-50 disabled:pointer-events-none"
      disabled={!isLoggedIn}
      onClick={() => toggleFavorite(jobId)}
    >
      {
        isInFavorites(jobId) ? '❤️' : '🤍'
      }
    </button>
  )
}

export function JobListingCard({ job }) {
  const jobDetailHref = `/job/${job.id}`

  return (
    <article className="p-8 shadow-shadow flex bg-none shadow-none rounded-none border-b border-solid border-[#ffffff4d] m-0 items-start gap-4" data-modality={job.data.modality} data-level={job.data.level} data-technology={job.data.technology}>
      <div>
        <h3>
          <Link to={jobDetailHref}>
            {job.title}
          </Link>
        </h3>
        <small className="text-sm opacity-75">{job.company} | {job.location}</small>
        <p className="mt-2 text-text-muted">{job.description}</p>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Link className="hover:underline" to={jobDetailHref}>Ver Detalles</Link>
        <JobCardApplyButton />
        <JobCardFavoriteButton jobId={job.id} />
      </div>
    </article>
  )
}