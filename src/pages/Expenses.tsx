import { ActionFunctionArgs, useLoaderData } from 'react-router-dom';
import {
    addExpense,
    fetchData,
    formatCurrencyAmount,
    formatDateString,
    type Expense,
} from '../utils/helpers';
import {
    Heading,
    Stack,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    createStandaloneToast,
} from '@chakra-ui/react';

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
    const expenseTableHeaders = ['Expense', 'Amount', 'Date'];

    return (
        <Stack spacing={4}>
            <Heading as="h1" size="lg">
                Your Expenses
            </Heading>
            <TableContainer>
                <Table>
                    <Thead>
                        <Tr>
                            {expenseTableHeaders.map((header, index) => (
                                <Th key={index}>{header}</Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {expenses?.map((expense) => (
                            <Tr key={expense.id}>
                                <Td>{expense.name}</Td>
                                <Td>{formatCurrencyAmount(expense.amount)}</Td>
                                <Td>{formatDateString(expense.createdAt)}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Stack>
    );
};

export default Expenses;
