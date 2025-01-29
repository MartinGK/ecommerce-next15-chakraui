import { Button, Card, Image, Text } from "@chakra-ui/react"
import { ProductType } from "@/lib/types"
import {
    DialogRoot,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ProductDialogContent } from "./ProductDialogContent"

export const Product = ({ product }: { product: ProductType }) => {
    return <DialogRoot size="cover" placement="center" motionPreset="slide-in-bottom">
        <DialogTrigger asChild>
            <Card.Root maxW="sm" overflow="hidden" cursor="pointer">
                <Image
                    src={product.image}
                    alt={product.title}
                    maxHeight="300px"
                    objectPosition="center"
                    objectFit="cover"
                />
                <Card.Body gap="2">
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Description>
                        {product.description}
                    </Card.Description>
                    <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                        ${product.price}
                    </Text>
                </Card.Body>
                <Card.Footer gap="2">
                    <Button variant="solid">Buy now</Button>
                    <Button variant="ghost">Add to cart</Button>
                </Card.Footer>
            </Card.Root>
        </DialogTrigger>
        <ProductDialogContent product={product} />
    </DialogRoot>
}

