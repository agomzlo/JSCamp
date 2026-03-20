import { useState } from "react"

export function JobListingCard({ job }) {
  const [isApplied, setIsApplied] = useState(false);
  const buttonText = isApplied ? "Aplicado" : "Aplicar";
  const buttonClass = isApplied ? "is-applied" : "";

  return (
    <article className="job-listing-card" data-modality={job.data.modalidad} data-level={job.data.nivel} data-technology={job.data.technology}>
      <div>
        <h3>{job.titulo}</h3>
        <small>{job.empresa} | {job.ubicacion}</small>
        <p>{job.descripcion}</p>
      </div>
      <button onClick={() => setIsApplied(true)} className={`button-apply-job ${buttonClass}`}>
        {buttonText}
      </button>
    </article>
  )
}