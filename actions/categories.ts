import { ApiRoutes } from "@/constants/routes";
import axios from "axios";

export const getCategories = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}${ApiRoutes.GET_ALL_CATEGORIES}`)
        return response.data
    } catch (error) {
        console.error(error)
        return []
    }
}

export const getProductsByCategory = async ({ category, limit = 0 }: { category: string, limit?: number }) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}${ApiRoutes.GET_ALL_PRODUCTS_CATEGORY(category)}?limit=${limit}`)
        return response.data
    } catch (error) {
        console.error(error)
        return []
    }
}