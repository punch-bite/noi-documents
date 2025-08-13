import { Outlet } from 'react-router-dom';
import Aside from '@sections/aside';
import Footer from '@sections/Footer'
import Navigation from '@sections/navigation';

function AuthLayout() {

    return (
        <section className="app">
            <Aside />
            <main className='main bg-black min-vh-100' role='main'>
                <Navigation />
                <Outlet />
            </main>
        </section>
    );
}

export default AuthLayout;