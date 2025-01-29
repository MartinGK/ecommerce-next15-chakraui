import { create } from "zustand";
import { ProductType } from "@/lib/types";

type ProductsStore = {
    products: ProductType[],
    filteredProducts: ProductType[],
    isLoadingProducts: boolean,
    setProducts: (products: ProductType[]) => void,
    setFilteredProducts: (filteredProducts: ProductType[]) => void,
    setIsLoadingProducts: (isLoading: boolean) => void
}

export const useProductsStore = create<ProductsStore>()((set) => ({
    products: [],
    filteredProducts: [],
    isLoadingProducts: false,
    setProducts: (products: ProductType[]) => set({ products }),
    setFilteredProducts: (filteredProducts: ProductType[]) => set({ filteredProducts }),
    setIsLoadingProducts: (isLoadingProducts: boolean) => set({ isLoadingProducts }),
}))