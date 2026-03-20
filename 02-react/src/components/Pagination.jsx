export function Pagination({ currentPage = 1, totalPages = 5, onPageChange }) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    const stylePrevPage = isFirstPage ? { pointerEvents: 'none', opacity: 0.5 } : {};
    const styleNextPage = isLastPage ? { pointerEvents: 'none', opacity: 0.5 } : {};

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
        <nav className="pagination">
            <a href={buildPageUrl(currentPage - 1)} onClick={handlePrevPage} style={stylePrevPage}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 6l-6 6l6 6" />
                </svg>
            </a>

            {
                pages.map((page) => (
                    <a onClick={(event) => handlePageClick(event, page)} key={page} className={page === currentPage ? 'is-active' : ''} href={buildPageUrl(page)}>{page}</a>
                ))
            }

            <a href={buildPageUrl(currentPage + 1)} onClick={handleNextPage} style={styleNextPage}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 6l6 6l-6 6" />
                </svg>
            </a>
        </nav>
    );
}