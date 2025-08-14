import MainLayout from '@/components/layouts/MainLayout';
import Home from "@pages/homes/Home";
import Contact from "@pages/contact_nous";
import AboutMe from "@pages/about_me";
import TeamPage from "@pages/team";
import Politique from "@pages/legales/politiques";
import Condition from "@pages/legales/conditions";

const publicRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'a-propos', element: <AboutMe /> },
      { path: 'contactez-nous', element: <Contact /> },
      { path: 'team', element: <TeamPage /> },
      { path: 'conditions', element: <Condition /> },
      { path: 'politiques', element: <Politique /> },
    ]
  }
];

export default publicRoutes;