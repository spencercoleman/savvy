import { Form } from 'react-router-dom';

const LoginForm = () => {
    return (
        <div>
            <Form method="post">
                <input
                    type="text"
                    name="username"
                    required
                    placeholder="What is your name?"
                    aria-label="Your name"
                    autoComplete="given-name"
                />
                <button type="submit">Get Started</button>
            </Form>
        </div>
    );
};

export default LoginForm;
