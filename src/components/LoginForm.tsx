import { Form } from 'react-router-dom';
import { Button, Flex, Input } from '@chakra-ui/react';

const LoginForm = () => {
    return (
        <div>
            <Form method="post">
                <Flex gap={2}>
                    <Input
                        type="text"
                        name="username"
                        required
                        placeholder="What is your name?"
                        aria-label="Your name"
                        autoComplete="given-name"
                        variant="filled"
                    />
                    <Button type="submit">Get Started</Button>
                </Flex>
            </Form>
        </div>
    );
};

export default LoginForm;
