import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard, { dashboardAction, dashboardLoader } from './pages/Dashboard';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
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
