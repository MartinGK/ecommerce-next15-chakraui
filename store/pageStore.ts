import { create } from "zustand"

interface PageStore {
    sort: 'desc' | 'asc'
    setSort: (sort: 'desc' | 'asc') => void
}

export const usePageStore = create<PageStore>((set) => ({
    sort: 'desc',
    setSort: (sort: 'desc' | 'asc') => set({ sort }),
}))
