import LoginPage from "@pages/auth/login";
import RegisterPage from "@pages/auth/register";


const authRoutes = [
    {
        path: '/login',
        children: [
            { index: true, element: <LoginPage /> },
            { path: 'register', element: <RegisterPage /> },
        ]
    }
];

export default authRoutes;