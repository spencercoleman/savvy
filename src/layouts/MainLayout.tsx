import { Outlet, useLoaderData } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import { fetchData } from '../utils/helpers';

interface LayoutData {
    username: string;
}

export const mainLoader = (): LayoutData => {
    const username = fetchData('savvy_username');

    return {
        username,
    };
};

const Dashboard = () => {
    const { username } = useLoaderData() as LayoutData;

    return (
        <Container maxW="container.xl" p={2}>
            <Outlet />
        </Container>
    );
};

export default Dashboard;
