import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout, { mainLoader } from './layouts/MainLayout';
import Dashboard, { dashboardAction, dashboardLoader } from './pages/Dashboard';
import { deleteFormAction } from './components/DeleteForm';

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
                element: <p>Account deleted</p>,
                action: deleteFormAction,
            },
        ],
    },
]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
