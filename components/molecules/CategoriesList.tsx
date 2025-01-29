import { Box, List, Text } from "@chakra-ui/react"

export const CategoriesList = ({ categories }: { categories: string[] }) => {
    return <Box position="sticky" top="0" left="0" height="100svh" paddingTop="20px" >
        <Text>Categories</Text>
        <List.Root>
            {categories.map((category: string) => (
                <List.Item key={category}>{category}</List.Item>
            ))}
        </List.Root>
    </Box>
}