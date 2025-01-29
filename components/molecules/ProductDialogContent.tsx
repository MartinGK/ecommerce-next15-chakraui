
import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { ProductType } from "@/lib/types"
import { Text, Image, Button, Box } from "@chakra-ui/react"
import { FaCartPlus } from "react-icons/fa"

export const ProductDialogContent = ({ product }: { product: ProductType }) => {
    return <DialogContent padding="20">
        <DialogHeader display="flex" justifyContent="space-between" textAlign="center" alignItems="center">
            <DialogTitle fontSize="2rem" width="100%" textAlign="center">{product.title}</DialogTitle>
            <DialogCloseTrigger />
        </DialogHeader>
        <DialogBody display="flex" gap="5">
            <Box width="800px" height="100%">
                <Image src={product.image} alt={product.title}
                    objectPosition="center"
                    objectFit="cover"
                    flex="1"
                    overflow="hidden"
                    maxWidth="100%"
                    height="auto"
                    display="block"
                />
            </Box>
            <Box display="flex" flexDirection="column" gap="5" padding="20">
                <Text fontSize="1.5rem" lineHeight="1.5">{product.description}</Text>
                <Text fontSize="3rem" marginLeft="auto">${product.price}</Text>
                <Box display="flex" gap="10" marginTop="auto" marginLeft="auto">
                    <Button><FaCartPlus /> Add to cart</Button>
                    <Button>Buy now!</Button>
                </Box>
            </Box>
        </DialogBody>
    </DialogContent>
}