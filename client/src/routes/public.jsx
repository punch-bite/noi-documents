import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import NotFound from "./pages/404"
import Contact from "./pages/contact_nous"
import AboutMe from "./pages/about_me"
import TeamPage from "./pages/team"
import Dashboard from "./pages/dashboard/dashboard"
import Template from "./pages/dashboard/template"
import MonCompte from "./pages/dashboard/mon_compte"
import Workspace from "./pages/dashboard/workspace"
import MainLayout from "./components/layouts/MainLayout"
function router() {

    return (
        <Routes>
            < Route path='/dashboard' element={< Dashboard />} >
                <Route path='mon-compte' element={<MonCompte />} />
                <Route path='template' element={<Template />} />
                <Route path='workspace' element={<Workspace />} />


                <Route path='template/:templateid' element={<Template />} />
            </Route >



            {/* Route imbriquée */}
            < Route element={< MainLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/contactez-nous' element={<Contact />} />
                <Route path="/a-propos" element={<AboutMe />} />
                <Route path="/team" element={<TeamPage />} />
            </Route >


            {/* 404 - Page non trouvée */}
            < Route path="*" element={< NotFound />} />
        </Routes>
    )
}

export default router();