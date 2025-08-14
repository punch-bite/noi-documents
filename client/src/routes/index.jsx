import { createBrowserRouter, Navigate } from 'react-router-dom';
import publicRoutes from './publicRoute';
import authRoutes from './authRoute';
import privateRoutes from './privateRoute';
import NotFound from "@pages/404";

// Exportez la fonction createAppRouter correctement
export function createAppRouter(isAuthenticated) {
  return createBrowserRouter([
    ...publicRoutes,
    ...authRoutes,
    ...privateRoutes.map(route => ({
      ...route,
      element: isAuthenticated ? route.element : <Navigate to="/login" replace />,
      children: route.children?.map(childRoote => ({
        ...childRoote,
        element: isAuthenticated ? childRoote.element : <Navigate to="/login" replace />
      }))
    })),
    {
      path: '*',
      element: <NotFound />
    }
  ]);
}

// Exportez aussi le router par défaut si nécessaire
const router = createAppRouter(false); // false par défaut
export default router;