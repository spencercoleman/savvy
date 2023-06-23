import { ActionFunctionArgs, useLoaderData } from 'react-router-dom';
import { fetchData } from '../utils/helpers';

interface BudgetsData {
    budgets: string | null;
}

export const budgetsLoader = (): BudgetsData => {
    const budgets = fetchData('savvyBudgets');

    return {
        budgets,
    };
};

export const budgetsAction = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const budgetData = Object.fromEntries(formData);

    try {
        // Get existing budgets
        // Create new budget using budgetData
        // Insert new budget into budgets list and save to localStorage
        console.log('New budget created ', budgetData);
        return null;
    } catch (e) {
        throw new Error('There was a problem creating your account');
    }
};

const Budgets = () => {
    const { budgets } = useLoaderData() as BudgetsData;

    return <div>Budgets page</div>;
};

export default Budgets;
