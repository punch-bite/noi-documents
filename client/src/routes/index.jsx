import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import AuthLayout from '@/components/layouts/AuthLayout';
import Home from "@pages/homes/Home";
import NotFound from "@pages/404";
import Contact from "@pages/contact_nous";
import AboutMe from "@pages/about_me";
import TeamPage from "@pages/team";
import Dashboard from "@pages/dashboard/dashboard";
import Template from "@pages/dashboard/template";
import MonCompte from "@pages/dashboard/mon_compte";
import Workspace from "@pages/dashboard/workspace";
import LoginPage from "@pages/auth/login";
import Politique from "@pages/legales/politiques";
import Condition from "@pages/legales/conditions";
import RegisterPage from "@pages/auth/register";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'a-propos', element: <AboutMe /> },
      { path: 'contactez-nous', element: <Contact /> },
      { path: 'team', element: <TeamPage /> },
      { path: 'conditions', element: <Condition /> },
      { path: 'politiques', element: <Politique /> },

    ]
  },
  {
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      {
        path: 'dashboard',
        children: [
          { index: true, element: <Dashboard /> },
          { path: 'template', element: <Template /> },
          { path: 'mon-compte', element: <MonCompte /> },
          { path: 'workspace', element: <Workspace /> }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export default router;