import { Form } from 'react-router-dom';
import { Button, Icon, Input, Stack } from '@chakra-ui/react';
import { BiUserCheck } from 'react-icons/bi';

const LoginForm = () => {
    return (
        <Form method="post">
            <Stack gap={4}>
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
