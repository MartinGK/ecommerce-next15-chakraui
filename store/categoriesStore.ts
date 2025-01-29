import { create } from "zustand";

type CategoriesStore = {
    categories: string[],
    isLoadingCategories: boolean,
    setCategories: (categories: string[]) => void,
    setIsLoadingCategories: (isLoading: boolean) => void
}

export const useCategoriesStore = create<CategoriesStore>()((set) => ({
    categories: [],
    isLoadingCategories: false,
    setCategories: (categories: string[]) => set({ categories }),
    setIsLoadingCategories: (isLoadingCategories: boolean) => set({ isLoadingCategories }),
}))