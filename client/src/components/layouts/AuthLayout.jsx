import { Outlet } from 'react-router-dom';
import Header from '@sections/Header';
import Footer from '@sections/Footer'

function AuthLayout() {

    return (
        <div className="app">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default AuthLayout;