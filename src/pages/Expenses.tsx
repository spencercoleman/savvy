import { ActionFunctionArgs, useLoaderData } from 'react-router-dom';
import { fetchData, addExpense, type Expense } from '../utils/helpers';
import { Heading, Stack, createStandaloneToast } from '@chakra-ui/react';

interface ExpensesData {
    expenses: Expense[] | null;
}

export const expensesLoader = (): ExpensesData => {
    const expenses = fetchData('savvy_expenses');

    return {
        expenses,
    };
};

export const expensesAction = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const expenseData = Object.fromEntries(formData);

    try {
        const newExpense = {
            amount: expenseData.newExpenseAmount,
            budget: expenseData.newExpenseBudget,
            name: expenseData.newExpenseName,
        };
        addExpense(newExpense);

        return createStandaloneToast().toast({
            description: `${newExpense.name} added!`,
            status: 'success',
            duration: 3000,
        });
    } catch (e) {
        throw new Error('There was a problem adding the expense.');
    }
};

const Expenses = () => {
    const { expenses } = useLoaderData() as ExpensesData;

    return (
        <Stack spacing={4}>
            <Heading as="h1" size="lg">
                Your Expenses
            </Heading>
            {expenses?.map((expense) => (
                <div key={expense.id}>
                    {expense.name} ${expense.amount}
                </div>
            ))}
        </Stack>
    );
};

export default Expenses;
