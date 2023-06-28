import { Box, Flex, Image, Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";


interface HeaderProps {
    username: string;
}
function Header({ username }: HeaderProps) {

    const router = useRouter();

    const onClickLogin = () => {
        router.push("/register/signIn");
    }

    return (
        <Flex h="20" gap="60vw" align="center" justify="center" shadow='md' mb='10'>
            <Flex align="flex-end">
                <Box w="20" h="20">
                    <Image
                        src="/chicken.png"
                        alt="chickenlogo"
                        objectFit="cover"
                    />
                </Box>
                <Heading textTransform="uppercase" color="orange.400">
                    do you like chicken?
                </Heading>
            </Flex>
            <Flex align="center">
                {username ? (
                    <Box>{username}</Box>
                ) : (
                    <Button onClick={onClickLogin} colorScheme="orange" variant="solid">
                        로그인
                    </Button>
                )}
            </Flex>
        </Flex>
    );
}

export default Header;
