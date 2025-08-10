import { Link } from 'react-router-dom';
function Header() {

    return (
        <section className='container-fluid navbar navbar-expand-lg navbar-dark bg-white sticky-top d-flex align-items-center'>
            <div className='container'>
                <ul className='col-md-2'>
                    <li className='nav-item'>
                        <Link to={"/"}>
                            <img src="/noi.ico" alt="" width={"50"} />
                        </Link>
                    </li>
                </ul>

                <button className='navbar-toggler align-right border-0 focus-ring-light py-3' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <i className="bi bi-list text-black 5em blockquote"></i>
                </button>
                <nav className='collapse navbar-collapse col-md-8' id='navbarNav'>
                    <ul className='navbar-nav mx-auto'>
                        <li className='nav-item me-3'><Link className='nav-link' to={"/"}>Accueil</Link></li>
                        <li className='nav-item me-3'><Link className='nav-link' to={"/a-propos"}>A Propos</Link></li>
                        <li className='nav-item me-3'><Link className='nav-link' to={"/contactez-nous"}>Contactez-Nous</Link></li>
                        <li className='nav-item me-3'><Link className='nav-link' to={"/team"}>Notre Equipe</Link></li>
                    </ul>
                    <ul className='navbar-nav col-md-2'>
                        <li className='nav-item'><Link className='btn btn-link bg-dark bg-gradient text-decoration-none text-white' to={"/login"}>Connexion</Link></li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}

export default Header;