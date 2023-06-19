export const fetchData = (key: string) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};

export const deleteItem = ({ key }: { key: string }) => {
    localStorage.removeItem(key);
};
