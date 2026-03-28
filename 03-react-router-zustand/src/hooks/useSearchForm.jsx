import { useRef } from "react";
export function useSearchForm({ technologyId, locationId, experienceLevelId, searchId, onFilterChange, onTextChange, onReset }) {
    const debounceRef = useRef(null);
    const debounce = (callback, delay) => {
        clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(callback, delay);
    }
    
    const handleChangeFilter = (event) => {
        event.preventDefault();

        if (event.target.name === searchId) {
            debounce(() => onTextChange(event.target.value), 500);
            return;
        }

        const formData = new FormData(event.currentTarget);

        const filters = {
            technology: formData.get(technologyId),
            location: formData.get(locationId),
            experienceLevel: formData.get(experienceLevelId)
        }

        onFilterChange(filters);
    }

    const handleReset = (formRef) => {
        formRef.current.reset();
        
        onReset();
    }

    return {
        handleChangeFilter,
        handleReset
    }
}