import { Form } from 'react-router-dom';
import {
    Box,
    Button,
    Flex,
    Icon,
    Input,
    Stack,
    useToast,
} from '@chakra-ui/react';
import { BiUserCheck } from 'react-icons/bi';

const LoginForm = () => {
    const toast = useToast();

    return (
        <Form
            method="post"
            onSubmit={() =>
                toast({
                    description: 'You created your account!',
                    status: 'success',
                    duration: 3000,
                })
            }
        >
            <Stack>
                <Input
                    type="text"
                    name="username"
                    required
                    placeholder="What is your name?"
                    aria-label="Your name"
                    autoComplete="given-name"
                    variant="filled"
                />
                <Button type="submit" display="flex" gap={1}>
                    <Icon as={BiUserCheck} boxSize={6} />
                    Get Started
                </Button>
            </Stack>
        </Form>
    );
};

export default LoginForm;
