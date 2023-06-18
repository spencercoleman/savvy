import { useLoaderData } from 'react-router-dom';
import { fetchData } from '../utils/helpers';

interface DashboardData {
    username: string | null;
}

export const dashboardLoader = () => {
    const username = fetchData('savvy_username');

    return {
        username,
    };
};

const Dashboard = () => {
    const { username } = useLoaderData() as DashboardData;
    return <h1>{username}</h1>;
};

export default Dashboard;
