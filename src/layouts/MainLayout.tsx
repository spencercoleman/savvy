import { Outlet, useLoaderData } from 'react-router-dom';
import { Button, Container, Icon, Stack, useColorMode } from '@chakra-ui/react';
import { BiMoon, BiSun } from 'react-icons/bi';
import { fetchData } from '../utils/helpers';
import Navbar from '../components/Navbar';

interface LayoutData {
    username: string;
}

export const mainLoader = (): LayoutData => {
    const username = fetchData('savvy_username');

    return {
        username,
    };
};

Container.defaultProps = {
    maxW: 'container.xl',
    py: 4,
};

const Dashboard = () => {
    const { username } = useLoaderData() as LayoutData;
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Stack minH="100vh">
            <Container as="nav">
                <Navbar username={username} />
            </Container>
            <Container as="main" flexGrow={1}>
                <Outlet />
            </Container>
            <Container as="footer" centerContent>
                <Button variant="unstyled" onClick={toggleColorMode}>
                    <Icon
                        as={colorMode === 'light' ? BiMoon : BiSun}
                        boxSize={6}
                    />
                </Button>
            </Container>
        </Stack>
    );
};

export default Dashboard;
