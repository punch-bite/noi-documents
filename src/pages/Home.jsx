import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <section className="container-fluid bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-12 p-md-5 p-1">
                            <div className="card p-md-5 text-start border-0 bg-transparent">
                                <h6>Bienvenue dans</h6>
                                <h1 className="text-uppercase mb-5">Noi HeaderCraft</h1>
                                <h3 className="text-uppercase">Votre Assistant Professionnel de Création d'En-têtes</h3>
                                <p className="hero-text">Votre Outil Tout-en-Un pour des En-têtes Parfaits
                                    Que vous rédigiez un devis, un contrat, un rapport ou tout document officiel,
                                    Noi HeaderCraft vous permet de générer en quelques clics des en-têtes clairs,
                                    professionnels et personnalisés, adaptés à vos besoins métiers.
                                </p>
                                <Link to={'/'} className="btn btn-link col-md-3 mt-5 hero-button text-decoration-none">Essayez maintenant</Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-12"></div>
                    </div>
                </div>
            </section>
            <section className="container-fluid py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-12">
                            <div className="card p-3 captive-box">
                                <img className="card-fluid rounded-3" src="/noi.ico" alt="noi.ico" width={150} />
                                <h4 className="py-3">Title box hero</h4>
                                <p>Text content box</p>
                                <Link className="my-5 hero-button" to={''}>Essayez maintenant</Link>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="card p-3 captive-box">
                                <img className="card-fluid rounded-3" src="/noi.ico" alt="noi.ico" width={150} />
                                <h4 className="py-3">Title box hero</h4>
                                <p>Text content box</p>
                                <Link className="my-5 hero-button" to={''}>Essayez maintenant</Link>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="card p-3 captive-box">
                                <img className="card-fluid rounded-3" src="/noi.ico" alt="noi.ico" width={150} />
                                <h4 className="py-3">Title box hero</h4>
                                <p>Text content box</p>
                                <Link className="my-5 hero-button" to={''}>Essayez maintenant</Link>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="card p-3 captive-box">
                                <img className="card-fluid rounded-3" src="/noi.ico" alt="noi.ico" width={150} />
                                <h4 className="py-3">Title box hero</h4>
                                <p>Text content box</p>
                                <Link className="my-5 hero-button" to={''}>Essayez maintenant</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;