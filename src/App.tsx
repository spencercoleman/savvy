import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { deleteFormAction } from './components/DeleteForm';
import MainLayout, { mainLoader } from './layouts/MainLayout';
import Dashboard, { dashboardAction, dashboardLoader } from './pages/Dashboard';
import Budgets, { budgetsAction, budgetsLoader } from './pages/Budgets';
import Expenses, { expensesAction, expensesLoader } from './pages/Expenses';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        loader: mainLoader,
        children: [
            {
                index: true,
                element: <Dashboard />,
                loader: dashboardLoader,
                action: dashboardAction,
            },
            {
                path: 'budgets',
                element: <Budgets />,
                loader: budgetsLoader,
                action: budgetsAction,
            },
            {
                path: 'expenses',
                element: <Expenses />,
                loader: expensesLoader,
                action: expensesAction,
            },
            {
                path: 'delete',
                action: deleteFormAction,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
