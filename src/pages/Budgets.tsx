import { ActionFunctionArgs, useLoaderData } from 'react-router-dom';
import { fetchData, addBudget, type Budget } from '../utils/helpers';
import {
    Heading,
    SimpleGrid,
    Stack,
    createStandaloneToast,
} from '@chakra-ui/react';
import BudgetCard from '../components/BudgetCard';

interface BudgetsData {
    budgets: Budget[] | null;
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

    return (
        <Stack spacing={4}>
            <Heading as="h1" size="lg">
                Your Budgets
            </Heading>
            <SimpleGrid columns={[1, null, 2, 3]} gap={4}>
                {budgets?.map((budget) => (
                    <BudgetCard key={budget.id} budget={budget} />
                ))}
            </SimpleGrid>
        </Stack>
    );
};

export default Budgets;
