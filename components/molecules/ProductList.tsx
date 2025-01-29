import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import { ProductType } from "@/lib/types"
import { Product } from "./Product"
import { useProductsStore } from "@/store/productsStore"

export const ProductList = ({ products }: { products: ProductType[] }) => {
    const { filteredProducts, isLoadingProducts } = useProductsStore()

    return <Box flex="1" width="100%" flexDirection="column" alignItems="center" justifyContent="center" display="flex" paddingTop="20px">
        {isLoadingProducts ? <Spinner size="xl" /> :
            filteredProducts.length === 0 ? <Text fontSize="2rem" width="100%" textAlign="center" pt="40px">No results found</Text> :
                <SimpleGrid columns={[2, null, 3]} gap="40px" overflowY="auto" height="100%">
                    {filteredProducts.map((product: ProductType) => (
                        <Product key={product.id} product={product} />
                    ))}
                </SimpleGrid>
        }
    </Box>
}