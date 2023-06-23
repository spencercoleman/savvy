import { ActionFunctionArgs, useLoaderData } from 'react-router-dom';
import { fetchData } from '../utils/helpers';
import { createStandaloneToast } from '@chakra-ui/react';
import Splash from '../components/Splash';

interface DashboardData {
    username: string | null;
    budgets: string | null;
}

export const dashboardLoader = (): DashboardData => {
    const username = fetchData('savvy_username');
    const budgets = fetchData('savvy_budgets');

    return {
        username,
        budgets,
    };
};

export const dashboardAction = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const username = formData.get('username');

    try {
        localStorage.setItem('savvy_username', JSON.stringify(username));

        return createStandaloneToast().toast({
            description: 'You created your account!',
            status: 'success',
            duration: 3000,
        });
    } catch (e) {
        throw new Error('There was a problem creating your account');
    }
};

const Dashboard = () => {
    const { username } = useLoaderData() as DashboardData;

    return username ? (
        <>
            <p>Welcome {username}</p>
        </>
    ) : (
        <Splash />
    );
};

export default Dashboard;
