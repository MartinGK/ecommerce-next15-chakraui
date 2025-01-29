'use client'
import { usePageStore } from "@/store/pageStore"
import { useProductsStore } from "@/store/productsStore"
import { Button, Input, Box } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { FaSort } from "react-icons/fa"

export const SearchBar = () => {
    const { setFilteredProducts, products } = useProductsStore()
    const [search, setSearch] = useState("")
    const { sort, setSort } = usePageStore();

    useEffect(() => {
        if (search) {
            setFilteredProducts(products.filter((product) => product.title.includes(search)))
        } else {
            setFilteredProducts(products)
        }
    }, [search, products])

    const toggleSort = () => {
        setSort(sort === 'desc' ? 'asc' : 'desc')
    }

    return <Box display="flex" gap="40px" width="100%" >
        <Input placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
        <Button onClick={toggleSort}>
            <FaSort />
        </Button>
    </Box>
}