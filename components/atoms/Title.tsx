import { Text } from "@chakra-ui/react"

export const Title = ({ children }: { children: React.ReactNode }) => {
    return <Text fontSize="5rem" fontWeight="bold">{children}</Text>
}