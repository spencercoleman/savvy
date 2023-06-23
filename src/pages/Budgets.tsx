import { ActionFunctionArgs, useLoaderData } from 'react-router-dom';
import { fetchData, addBudget } from '../utils/helpers';
import { createStandaloneToast } from '@chakra-ui/react';

interface BudgetsData {
    budgets: any | null;
}

export const budgetsLoader = (): BudgetsData => {
    const budgets = fetchData('savvy_budgets');

    return {
        budgets,
    };
};

export const budgetsAction = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const budgetData = Object.fromEntries(formData);

    try {
        const newBudget = {
            amount: budgetData.newBudgetAmount,
            name: budgetData.newBudgetName,
        };
        addBudget(newBudget);

        return createStandaloneToast().toast({
            description: `${newBudget.name} created!`,
            status: 'success',
            duration: 3000,
        });
    } catch (e) {
        throw new Error('There was a problem creating the budget.');
    }
};

const Budgets = () => {
    const { budgets } = useLoaderData() as BudgetsData;

    return <div>Budgets page</div>;
};

export default Budgets;
