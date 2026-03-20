import { useEffect, useState } from "react";
import { useRouter } from "./useRouter.jsx";

const RESULTS_PER_PAGE = 5;

export function useFilters(){
  const searchParams = new URLSearchParams(window.location.search);
  const [filters, setFilters] = useState({
    technology: searchParams.get('technology') || '',
    location: searchParams.get('type') || '',
    experienceLevel: searchParams.get('experienceLevel') || ''
  });
  
  const [textToFilter, setTextToFilter] = useState(() => {
    return searchParams.get('text') || '';
  });
  const [currentPage, setCurrentPage] = useState(() => {
    return Number(searchParams.get('page')) || 1;
  });
  
  const [jobs, setJobs] = useState([]);
  const [totalJobs, setTotalJobs] = useState(0);
  const [loading, setLoading] = useState(false);

  const { navigateTo } = useRouter();
  
  const totalPages = Math.ceil(totalJobs / RESULTS_PER_PAGE);
  const showResetButton = filters.technology || filters.location || filters.experienceLevel || textToFilter;

  useEffect(() => {
    async function fetchJobs() {
      try{
        setLoading(true);

        const offset = (currentPage - 1) * RESULTS_PER_PAGE;
        const params = new URLSearchParams();

        if(textToFilter) params.append('text', textToFilter);
        if(filters.technology) params.append('technology', filters.technology);
        if(filters.location) params.append('type', filters.location);
        if(filters.experienceLevel) params.append('level', filters.experienceLevel);
        params.append('limit', RESULTS_PER_PAGE);
        params.append('offset', offset);

        const queryString = params.toString() ? `?${params.toString()}` : '';

        const response = await fetch(`https://jscamp-api.vercel.app/api/jobs${queryString}`);
        const json = await response.json();

        setJobs(json.data);
        setTotalJobs(json.total);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, [filters, textToFilter, currentPage]);

  useEffect(() => {
      const params = new URLSearchParams();

      if(textToFilter) params.append('text', textToFilter);
      if(filters.technology) params.append('technology', filters.technology);
      if(filters.location) params.append('type', filters.location);
      if(filters.experienceLevel) params.append('level', filters.experienceLevel);

      if(currentPage > 1) params.append('page', currentPage);

      const newUrl = params.toString() ? `?${params.toString()}` : '';

      navigateTo(window.location.pathname + newUrl);
  }, [filters, textToFilter, currentPage, navigateTo]);


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (filters) => {
    setFilters(filters);
    setCurrentPage(1);
  }

  const handleTextChange = (text) => {
    setTextToFilter(text);
    setCurrentPage(1);
  }

  const handleResetFilters = () => {
    setFilters({
      technology: '',
      location: '',
      experienceLevel: ''
    });
    setTextToFilter('');
    setCurrentPage(1);
  }

  return {
    currentPage,
    totalPages,
    jobs,
    loading,
    total: totalJobs,
    showResetButton,
    filters,
    textToFilter,
    handlePageChange,
    handleFilterChange,
    handleTextChange,
    handleResetFilters
  }
}