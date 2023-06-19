import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { deleteFormAction } from './components/DeleteForm';
import MainLayout, { mainLoader } from './layouts/MainLayout';
import Dashboard, { dashboardAction, dashboardLoader } from './pages/Dashboard';

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
                element: <p>Temp Budgets</p>,
            },
            {
                path: 'expenses',
                element: <p>Temp Expenses</p>,
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
