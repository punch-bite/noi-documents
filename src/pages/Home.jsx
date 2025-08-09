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
                                <h1 className="text-uppercase mb-5">Créez des <span className="text-gradient">en-têtes</span> de documents
                                    percutants en quelques clics.</h1>
                                <p className="hero-text">Notre éditeur intuitif en glisser-déposer vous permet
                                    de concevoir des en-têtes professionnels sans effort. Impressionnez vos clients avant même la première ligne.
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
                    <h1 className="my-5">
                        Une plateforme <span className="text-gradient">tout-en-un</span>
                    </h1>
                    <div className="row justify-content-center my-5 py-5">
                        <div className="col-md-3 col-12 p-md-3 p-2">
                            <div className="card p-3 captive-box first">
                                <i className="bi bi-cursor"></i>
                                <h4 className="py-3">Editeur drag & drop</h4>
                                <p>Ajoutez, déplacez et personnalisez logos, textes et formes avec une facilité déconcertante.</p>
                                <Link className="my-5 hero-button" to={''}>Essayez maintenant</Link>
                            </div>
                        </div>
                        <div className="col-md-3 col-12 p-md-3 p-2">
                            <div className="card p-3 captive-box">
                                <i className="bi bi-layers-half"></i>
                                <h4 className="py-3">Modèles Inspirants</h4>
                                <p>Démarrez rapidement avec notre bibliothèque de modèles conçus par des professionnels.</p>
                                <Link className="my-5 hero-button" to={''}>Essayez maintenant</Link>
                            </div>
                        </div>
                        <div className="col-md-3 col-12 p-md-3 p-2">
                            <div className="card p-3 captive-box">
                                <i className="bi bi-filetype-doc"></i>
                                <h4 className="py-3">Export Haute Qualité</h4>
                                <p>Téléchargez vos créations en PDF,DOC prêts pour l'impression, avec une qualité irréprochable</p>
                                <Link className="my-5 hero-button" to={''}>Essayez maintenant</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container-fluid p-0 testimoniale py-5">
                <div className="container">
                    <h1 className="mt-5 text-white">
                        Une plateforme <span className="text-gradient">tout-en-un</span>
                    </h1>
                </div>
            </section>
        </>
    )
}

export default Home;