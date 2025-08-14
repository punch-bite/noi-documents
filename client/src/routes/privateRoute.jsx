import AuthLayout from '@/components/layouts/AuthLayout';
import Dashboard from "@pages/dashboard/dashboard";
import Template from "@pages/dashboard/template";
import MonCompte from "@pages/dashboard/mon_compte";
import Workspace from "@pages/dashboard/workspace";


const privateRoutes = [
  {
    path: '/dashboard',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: '/dashboard/template', element: <Template /> },
      { path: '/dashboard/mon-compte', element: <MonCompte /> },
      { path: '/dashboard/workspace', element: <Workspace /> }
    ]

  }
];
export default privateRoutes;