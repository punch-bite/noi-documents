import './aside.css'
export default function Aside() {


    return (
        <aside id="aside" className='sticky-top '>
            <div className="logoBlock d-flex justify-content-between align-items-center">
                <img src="/noi.ico" alt="" height={50} />
                <button type="button" className='btn btn-sm bi bi-layout-text-sidebar-reverse text-white'></button>
            </div>
            <div className="menu">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to='/dashboard' className="nav-link"><i className="bi bi-house"></i><span>Dashboard</span></Link></li>
                    <li className="nav-item"><Link to='/templates' className="nav-link"><i className="bi bi-files"></i><span>Templates</span></Link></li>
                    <li className="nav-item"><Link to='/mon-compte' className="nav-link"><i className="bi bi-person"></i><span>Compte</span></Link></li>
                    <li className="nav-item"><Link to='/workspace' className="nav-link"><i className="bi bi-globe"></i><span>Workspace</span></Link></li>
                </ul>
            </div>
        </aside>
    )
} 