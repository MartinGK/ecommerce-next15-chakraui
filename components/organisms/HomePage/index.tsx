
// ## ecommerce-test
// Based on the following API: https://fakestoreapi.com/docs, create a basic interface to emulate an ecommerce platform using React and TypeScript.

// Requirements:
// - Must render the available categories.
// - Must include a home page that shows all products.
// - Must display the first 5 products from each category with their respective images.
// - Include a search bar to filter products by name and show a message when no results are found.
// - Include sorting in descending order by default.

// Optional requirement:
// - When clicking on each product, it should display: name, description, price, and an enlarged photo.
'use client'
import { getCategories, getProductsByCategory } from "@/actions/categories";
import { getProducts } from "@/actions/products";
import { useCategoriesStore } from "@/store/categoriesStore";
import { useProductsStore } from "@/store/productsStore";
import { Box, Button, Input, List, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ProductType } from "@/lib/types";
import { Product } from "@/components/molecules/Product";
import { SearchBar } from "@/components/molecules/SearchBar";
import { FaSort } from "react-icons/fa";
import { ProductList } from "@/components/molecules/ProductList";
import { CategoriesList } from "@/components/molecules/CategoriesList";
import { usePageStore } from "@/store/pageStore";
import { Title } from "@/components/atoms/Title";

export default function HomePage() {
    const { categories, setCategories, isLoadingCategories, setIsLoadingCategories } = useCategoriesStore()
    const { filteredProducts, setProducts } = useProductsStore()
    const { sort } = usePageStore()

    useEffect(() => {
        const fetchCategories = async () => {
            setIsLoadingCategories(true)
            const categories = await getCategories()
            setCategories(categories)
            setIsLoadingCategories(false)
        }
        fetchCategories()
    }, [])

    useEffect(() => {
        const fetchProducts = async () => {
            if (categories.length) {
                let fetchProductPromises: Promise<ProductType[]>[] = []
                categories.forEach(async (category: string) => {
                    fetchProductPromises.push(getProductsByCategory({ category, limit: 5 }))
                })
                const fetchedProducts = await Promise.all(fetchProductPromises)
                setProducts(fetchedProducts.flat().sort((a, b) => b.title.localeCompare(a.title)))
            }
        }

        fetchProducts()
    }, [categories])

    useEffect(() => {
        if (sort === 'desc') {
            setProducts(filteredProducts.sort((a, b) => b.title.localeCompare(a.title)))
        } else {
            setProducts(filteredProducts.sort((a, b) => a.title.localeCompare(b.title)))
        }
    }, [sort])

    if (isLoadingCategories) {
        return <Box display="flex" justifyContent="center" alignItems="center" height="100vh" width="100vw">
            <Spinner size="xl" />
        </Box>
    }

    return (
        <Box display="flex" alignItems="center" flexDirection="column" gap="40px" paddingTop="40px" paddingX="40px" width="100%" height="100svh">
            <Title>The Best Ecommerce!</Title>
            <SearchBar />
            <Box display="flex" gap="40px" width="100%">
                <CategoriesList categories={categories} />
                <ProductList products={filteredProducts} />
            </Box>

        </Box >
    )
}