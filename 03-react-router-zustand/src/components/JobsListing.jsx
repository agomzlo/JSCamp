import { JobListingCard } from './JobListingCard';
import { Loading } from './Loading';
import { Pagination } from './Pagination';

export function JobsListing({currentPage, onPageChange, paginatedJobs, totalPages, loading}) {
  return (
      <section className='px-4 bg-background pt-8'>
        <h2 className="mb-4 text-3xl font-bold text-text-primary text-center">Resultados de búsqueda</h2>

        {
          loading ? (
            <Loading />
          ) : (
            totalPages !== 0 ? (
            <>
              <div className="max-w-7xl my-0 mx-auto border border-solid border-[#ffffff4d] rounded-2xl">
                {paginatedJobs.map((job) => (
                    <JobListingCard key={job.id} job={job} />
                ))}
              </div>

              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
            </>
          ) : (
            <p className='text-center pb-8'>No se encontraron resultados para tu búsqueda.</p>
          ))
        }
      </section>
  )
}