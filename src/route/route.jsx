import LoginForm from "../pages/LoginPage/LoginForm";
import Form from "../pages/Tours/components/Form";

export const PublicRoutes = [
    {
        path: '/login',
        element: <LoginForm />
    }
];

export const PrivateRoutes = [
    {
        path: '/',
        element: <>Hello world</>
    },
];