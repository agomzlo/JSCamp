export function Pagination({ currentPage = 1, totalPages = 5, onPageChange }) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    const stylePrevPage = isFirstPage ? 'pointer-events-none opacity-50' : '';
    const styleNextPage = isLastPage ? 'pointer-events-none opacity-50' : '';

    const handlePrevPage = (event) => {
        event.preventDefault();
        !isFirstPage &&
        onPageChange(currentPage - 1);
    };

    const handleNextPage = (event) => {
        event.preventDefault();
        !isLastPage &&
        onPageChange(currentPage + 1);
    };

    const handlePageClick = (event, page) => {
        event.preventDefault();
        page !== currentPage &&
        onPageChange(page);
    };

    const buildPageUrl = (page) => {
        const url = new URL(window.location.href);
        url.searchParams.set('page', page);
        return url.href;
    }

    return (
        <nav className="flex justify-center gap-2 my-8">
            <a className={`flex items-center justify-center size-10 text-text-muted rounded-md transition-all duration-200 hover:bg-white focus:bg-white active:scale-90 ${stylePrevPage}`} href={buildPageUrl(currentPage - 1)} onClick={handlePrevPage}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 6l-6 6l6 6" />
                </svg>
            </a>

            {
                pages.map((page) => (
                    <a className={`flex items-center justify-center size-10 text-text-muted rounded-md transition-all duration-200 hover:bg-white focus:bg-white active:scale-90 ${page === currentPage ? 'bg-primary-light text-white pointer-events-none' : ''}`} onClick={(event) => handlePageClick(event, page)} key={page} href={buildPageUrl(page)}>{page}</a>
                ))
            }

            <a className={`flex items-center justify-center size-10 text-text-muted rounded-md transition-all duration-200 hover:bg-white focus:bg-white active:scale-90 ${styleNextPage}`} href={buildPageUrl(currentPage + 1)} onClick={handleNextPage}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 6l6 6l-6 6" />
                </svg>
            </a>
        </nav>
    );
}