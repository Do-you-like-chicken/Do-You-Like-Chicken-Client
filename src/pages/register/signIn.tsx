import axios from "axios";
import {
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Spacer,
    Button,
} from "@chakra-ui/react";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useRouter } from "next/router";

const SignIn = () => {
    const router = useRouter();
    const [Id, setId] = useState<string>("");
    const [Pw, setPw] = useState<string>("");

    const onChangeId = (e: ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
    };
    const onChangePw = (e: ChangeEvent<HTMLInputElement>) => {
        setPw(e.target.value);
    };

    const onClickBackToSignUp = (e: MouseEvent<HTMLButtonElement>) => {
        router.push("/register/signUp");
    };

    const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post("/api/users/signin", {
            username: Id,
            pw: Pw,
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <Flex
            height="100vh"
            alignItems="center"
            justifyContent="center"
            bg="whiteAlpha.100"
        >
            <form onSubmit={onSubmit}>
                <Flex
                    bg="orange.100"
                    flexDir="column"
                    w="25vw"
                    h="70vh"
                    borderRadius="lg"
                    p="2vw"
                    gap="1vw"
                >
                    <Heading fontSize="3vw">로그인</Heading>
                    <Spacer />
                    <FormControl borderRadius="lg">
                        <FormLabel fontSize="1.3vw" marginBottom="none">
                            ID
                        </FormLabel>
                        <Input
                            isInvalid
                            errorBorderColor="orange.300"
                            focusBorderColor="orange.500"
                            variant="flushed"
                            size="sm"
                            type="text"
                            onChange={onChangeId}
                            value={Id}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel fontSize="1.3vw" marginBottom="none">
                            PW
                        </FormLabel>
                        <Input
                            isInvalid
                            errorBorderColor="orange.300"
                            focusBorderColor="orange.500"
                            variant="flushed"
                            size="sm"
                            type="password"
                            onChange={onChangePw}
                            value={Pw}
                        />
                    </FormControl>
                    <Spacer />
                    <Flex>
                        <Button colorScheme="orange" mr="1vw" w='6vw' onClick={onClickBackToSignUp}>
                            회원가입
                        </Button>
                        <Spacer />
                        <Button colorScheme="orange" mr="1vw" w='6vw' type="submit">
                            로그인
                        </Button>
                    </Flex>
                </Flex>
            </form>
        </Flex>
    );
};

export default SignIn;
