import { JobsSearch } from "../components/JobsSearch.jsx";
import { JobsListing } from "../components/JobsListing.jsx";
import { useFilters } from "../hooks/useFilters.jsx";

export function EmploymentPage() {
  const {
    currentPage,
    totalPages,
    jobs,
    loading,
    total,
    showResetButton,
    filters,
    textToFilter,
    handlePageChange,
    handleFilterChange,
    handleTextChange,
    handleResetFilters
  } = useFilters();

  const title = `Resultados: ${total}, Paginas: ${totalPages}`;

  return (
      <main>
        <title>{loading ? 'Cargando resultados' : title}</title>
        <JobsSearch 
          initialFilters={filters} 
          initialText={textToFilter} 
          onFilterChange={handleFilterChange} 
          onTextChange={handleTextChange} 
          onReset={handleResetFilters} 
          showResetButton={showResetButton}
        />

        <JobsListing
          currentPage={currentPage}
          onPageChange={handlePageChange}
          totalPages={totalPages}
          paginatedJobs={jobs}
          loading={loading}
        />
      </main>
  )
}