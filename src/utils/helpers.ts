// Interfaces
export interface Budget {
    amount: number;
    createdAt: number;
    id: string;
    name: string;
}

export interface Expense {
    amount: number;
    budget: string;
    createdAt: number;
    id: string;
    name: string;
}

// Helpers
export const fetchData = (key: string) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};

export const deleteItem = ({ key }: { key: string }) => {
    localStorage.removeItem(key);
};

export const formatCurrencyAmount = (amount: number) => {
    return amount.toLocaleString(undefined, {
        style: 'currency',
        currency: 'USD',
    });
};

// Creates a new budget and adds to budget list
export const addBudget = ({
    name,
    amount,
}: {
    [k: string]: FormDataEntryValue;
}) => {
    const newBudget = {
        amount: Number(amount),
        createdAt: Date.now(),
        id: crypto.randomUUID(),
        name: name,
    };

    const currentBudgets = fetchData('savvy_budgets') ?? [];

    localStorage.setItem(
        'savvy_budgets',
        JSON.stringify([...currentBudgets, newBudget])
    );
};

// Creates a new expense and adds to expense list
export const addExpense = ({
    name,
    amount,
    budget,
}: {
    [k: string]: FormDataEntryValue;
}) => {
    const newExpense = {
        amount: Number(amount),
        budget: budget,
        createdAt: Date.now(),
        id: crypto.randomUUID(),
        name: name,
    };

    const currentExpenses = fetchData('savvy_expenses') ?? [];

    localStorage.setItem(
        'savvy_expenses',
        JSON.stringify([...currentExpenses, newExpense])
    );
};

// Fetches total amount spent for an individual budget
export const fetchSpentAmount = (budgetId: string) => {
    const currentExpenses: Expense[] = fetchData('savvy_expenses') ?? [];

    const totalBudgetSpent: number = currentExpenses.reduce((acc, expense) => {
        if (expense.budget !== budgetId) return acc;
        return (acc += expense.amount);
    }, 0);

    return totalBudgetSpent;
};
