export const fetchData = (key: string) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};

export const deleteItem = ({ key }: { key: string }) => {
    localStorage.removeItem(key);
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
