import {
    Flex,
    Card,
    CardBody,
    Stack,
    Heading,
    Text,
    Divider,
    CardFooter,
    ButtonGroup,
    Button,
    Image,
    Spacer,
    HStack,
    Box,
} from "@chakra-ui/react";

interface StoreData {
    menuName: string;
    brandName: string;
    img: string;
    price: number;
    contents: string;
    likes: number;
}

const StoreCard = ({
    menuName,
    brandName,
    img,
    price,
    contents,
    likes,
}: StoreData) => {
    return (
        <Card maxW="sm" m="5">
            <CardBody>
                <Image
                    src={img}
                    alt={menuName}
                    borderRadius="lg"
                    objectFit="cover"
                />
                <Stack mt="6" spacing="3">
                    <HStack align='baseline'>
                        <Heading size="md">{menuName}</Heading>
                        <Text color='gray.500' fontSize='xs'>{brandName}</Text>
                    </HStack>
                    <Text>{contents}</Text>
                    <Text color="blue.600" fontSize="2xl">
                        {price}원
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter alignItems="center" justifyContent="space-evenly">
                <ButtonGroup spacing="10">
                    <Button variant="solid" colorScheme="blue" >
                        Like
                    </Button>
                    <Spacer />
                    <Button variant="outline" colorScheme="blue">
                        Add to cart
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
};

export default StoreCard;
