import { useState, useEffect } from 'react';
import { Form } from 'react-router-dom';
import { fetchData, type Budget } from '../utils/helpers';
import { BiBookAdd, BiBookAlt, BiDollar } from 'react-icons/bi';
import {
    Box,
    Button,
    FormLabel,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    Select,
    Stack,
} from '@chakra-ui/react';

const NewExpenseForm = () => {
    const [budgets, setBudgets] = useState<Budget[]>([]);

    useEffect(() => {
        const budgetData: Budget[] = fetchData('savvy_budgets');
        setBudgets(budgetData);
    }, []);

    return (
        <Form method="post" action="/expenses">
            <Stack spacing={4}>
                <Box>
                    <FormLabel htmlFor="newBudgetName">Expense name</FormLabel>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none">
                            <Icon as={BiBookAlt} color="gray.500" boxSize={5} />
                        </InputLeftElement>
                        <Input
                            type="text"
                            variant="filled"
                            name="newExpenseName"
                            id="newExpenseName"
                            placeholder="e.g. Dinner"
                            required
                        />
                    </InputGroup>
                </Box>
                <Box>
                    <FormLabel htmlFor="newExpenseAmount">Amount</FormLabel>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none">
                            <Icon as={BiDollar} color="gray.500" boxSize={5} />
                        </InputLeftElement>
                        <Input
                            type="number"
                            variant="filled"
                            step={0.01}
                            min={0}
                            name="newExpenseAmount"
                            id="newExpenseAmount"
                            placeholder="e.g. 100"
                            required
                            inputMode="decimal"
                        />
                    </InputGroup>
                </Box>
                <Box>
                    <FormLabel htmlFor="newExpenseBudget">Budget</FormLabel>
                    <Select
                        variant="filled"
                        name="newExpenseBudget"
                        id="newExpenseBudget"
                        placeholder="Select budget"
                        required
                    >
                        {budgets
                            ?.sort((a, b) => b.createdAt - a.createdAt)
                            .map((budget) => (
                                <option key={budget.id} value={budget.id}>
                                    {budget.name}
                                </option>
                            ))}
                    </Select>
                </Box>
                <Box>
                    <Button
                        type="submit"
                        display="flex"
                        gap={1}
                        size={{ base: 'sm', md: 'md' }}
                    >
                        <Icon as={BiBookAdd} boxSize={5} />
                        Add Expense
                    </Button>
                </Box>
            </Stack>
        </Form>
    );
};

export default NewExpenseForm;
