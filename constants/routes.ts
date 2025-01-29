export const ApiRoutes = {
    GET_ALL_CATEGORIES: '/products/categories',
    GET_ALL_PRODUCTS: '/products',
    GET_ALL_PRODUCTS_SORT: (sort: string = "desc") => `/products?sort=${sort}`,
    GET_ALL_PRODUCTS_CATEGORY: (category: string) => `/products/category/${category}`
}