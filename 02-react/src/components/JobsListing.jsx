import { JobListingCard } from './JobListingCard';
import { Pagination } from './Pagination';

export function JobsListing({currentPage, onPageChange, paginatedJobs, totalPages, loading}) {
  return (
      <section>
        <h2 className='text-center'>Resultados de búsqueda</h2>

        {
          loading ? (
            <div className='flex justify-center'>
            <video src="/loading.webm" autoPlay muted loop></video>
            </div>
          ) : (
            totalPages !== 0 ? (
            <>
              <div className="jobs-listings">
                {paginatedJobs.map((job) => (
                    <JobListingCard key={job.id} job={job} />
                ))}
              </div>

              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
            </>
          ) : (
            <p className='text-center'>No se encontraron resultados para tu búsqueda.</p>
          ))
        }
      </section>
  )
}