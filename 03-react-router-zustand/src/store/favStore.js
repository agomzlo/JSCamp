import { create } from "zustand";

export const useFavoritesStore = create((set, get, store) => ({
    favorites: [],
    addFavorite: (jobId) => {
        set(state => ({ 
            favorites: state.favorites.includes(jobId)
                ? state.favorites 
                : [...state.favorites, jobId]
        }))
    },
    
    removeFavorite: (jobId) => {
        set(state => ({ 
            favorites: state.favorites.filter(id => id !== jobId)
        }))
    },

    isInFavorites: (jobId) => {
        return get().favorites.includes(jobId)
    },

    toggleFavorite: (jobId) => {
        const { addFavorite, removeFavorite, isInFavorites } = get();
        const isFavorite = isInFavorites(jobId);

        isFavorite ? removeFavorite(jobId) : addFavorite(jobId);
    },
    countFavorites: () => {
        return get().favorites.length;
    },
    clearFavorites: () => {
        set(store.getInitialState());
    }
}))