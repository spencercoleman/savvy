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
