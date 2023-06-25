import axios from "axios";
import {
    Box,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Spacer,
    Radio,
    RadioGroup,
    Stack,
    Button,
} from "@chakra-ui/react";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useRouter } from "next/router";

const SignUp = () => {
    const router = useRouter();
    const [Id, setId] = useState<string>("");
    const [Pw, setPw] = useState<string>("");
    const [NickName, setNickName] = useState<string>("");
    const [sex, setSex] = useState<string>("0");

    const onChangeId = (e: ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
    };
    const onChangePw = (e: ChangeEvent<HTMLInputElement>) => {
        setPw(e.target.value);
    };
    const onChangeNickName = (e: ChangeEvent<HTMLInputElement>) => {
        setNickName(e.target.value);
    };
    const onChangeSex = (e: MouseEvent<HTMLElement>) => {
        console.log(sex);
    };

    const onClickBackToLogin = (e: MouseEvent<HTMLButtonElement>) => {
        router.push("/register/signIn");
    };

    const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post("/api/users/signup", {
            username: Id,
            pw: Pw,
            nickname: NickName,
            sex: sex,
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
                    <Heading fontSize="3vw">회원가입</Heading>
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
                    <FormControl>
                        <FormLabel fontSize="1.3vw" marginBottom="none">
                            NickName
                        </FormLabel>
                        <Input
                            isInvalid
                            errorBorderColor="orange.300"
                            focusBorderColor="orange.500"
                            variant="flushed"
                            size="sm"
                            type="text"
                            onChange={onChangeNickName}
                            value={NickName}
                        />
                    </FormControl>
                    <RadioGroup
                        marginTop="5"
                        onChange={setSex}
                        value={sex}
                        onClick={onChangeSex}
                    >
                        <Stack direction="row">
                            <Radio value="0" colorScheme="orange" isInvalid>
                                남자
                            </Radio>
                            <Radio value="1" colorScheme="orange" isInvalid>
                                여자
                            </Radio>
                        </Stack>
                    </RadioGroup>
                    <Spacer />
                    <Flex>
                        <Button colorScheme="orange" mr="1vw" onClick={onClickBackToLogin}>
                            뒤로가기
                        </Button>
                        <Spacer />
                        <Button colorScheme="orange" mr="1vw" type="submit">
                            회원가입
                        </Button>
                    </Flex>
                </Flex>
            </form>
        </Flex>
    );
};

export default SignUp;
