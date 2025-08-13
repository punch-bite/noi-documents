import { Link } from "react-router-dom";

function Home() {
    const sections = document.querySelectorAll('section');
    // Configuration de l'Observer
    const observerOptions = {
        threshold: 0.5 // Déclenche quand 50% de la section est visible
    };

    const observerSections = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Activer la section visible
                entry.target.classList.add('active');

                // Désactiver les autres sections (optionnel)
                sections.forEach(section => {
                    if (section !== entry.target) {
                        section.classList.remove('active');
                    }
                });
            }
        });
    }, observerOptions);

    // Observer chaque section
    sections.forEach(section => {
        observerSections.observe(section);
    });

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
                                <div className="">
                                    <Link to={'/'} className="btn btn-link col-md-3 mt-5 hero-button2 text-decoration-none">Essayez gratuitement</Link>
                                    <Link to={'/'} className="btn btn-link col-md-3 mt-5 me-3 hero-button text-decoration-none">En Savoir plus</Link>
                                </div>
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
            <section className="container-fluid p-0 testimoniale py-5 px-0">
                <div className="container">
                    <h1 className="mt-5 text-white">
                        Boostez votre productivité avec <span className="text-gradient2">nos modèles clés en main</span>
                    </h1>
                </div>
                <div className="container modeles">
                    <div className="carousel" id="myCarousel" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" className="active" data-bs-slide-to="0" data-bs-target="#myCarousel"></button>
                            <button type="button" data-bs-slide-to="1" data-bs-target="#myCarousel"></button>
                            <button type="button" data-bs-slide-to="2" data-bs-target="#myCarousel"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-2 col-4 p-md-2 p-1">
                                            <div className="card"><img src="/noi.ico" alt="" /></div>
                                        </div>
                                        <div className="col-md-2 col-4 p-md-2 p-1">
                                            <div className="card"><img src="/noi.ico" alt="" /></div>
                                        </div>
                                        <div className="col-md-2 col-4 p-md-2 p-1">
                                            <div className="card"><img src="/noi.ico" alt="" /></div>
                                        </div>
                                        <div className="col-md-2 col-4 p-md-2 p-1">
                                            <div className="card"><img src="/noi.ico" alt="" /></div>
                                        </div>
                                        <div className="col-md-2 col-4 p-md-2 p-1">
                                            <div className="card"><img src="/noi.ico" alt="" /></div>
                                        </div>
                                        <div className="col-md-2 col-4 p-md-2 p-1">
                                            <div className="card"><img src="/noi.ico" alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-caption">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-button-control">
                            <button type="button" className="carousel-control-prev bg-black rounded-pill" data-bs-target="#myCarousel" data-bs-slide="prev"><span className="bi bi-arrow-left"></span></button>
                            <button type="button" className="carousel-control-next bg-black rounded-pill" data-bs-target="#myCarousel" data-bs-slide="next"><span className="bi bi-arrow-right"></span></button>
                        </div>
                    </div>

                </div>
            </section>
            <section className="container-fluid">
                <div className="container">
                    <h1 className="mt-5">
                        Nos <span className="text-gradient">clients</span> parlent pour nous ✨
                    </h1>
                    <p>Des résultats concrets, des partenaires ravis. Découvrez ce qu'ils disent de leur expérience avec nous.</p>
                </div>
                <div className="container">
                    <div className="carousel slide" id="myCarouselTestimonie" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" className="active" data-bs-slide-to="0" data-bs-target="#myCarouselTestimonie"></button>
                            <button type="button" data-bs-slide-to="1" data-bs-target="#myCarouselTestimonie"></button>
                        </div>
                        <div className="carousel-inner py-md-5 px-md-1 p-2">
                            <div className="carousel-item active">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4 col-12 p-md-2 p-1">
                                            <div className="card">
                                                <div className="card-body px-md-3">
                                                    <p className="msg p-md-5 p-2">
                                                        Cette application a standardisé tous nos documents d'en-tête en un clic.
                                                        Plus d'erreurs de formatage et un gain de temps considérable pour notre cabinet.
                                                    </p>
                                                </div>
                                                <div className="card-footer border-0 d-flex bg-transparent">
                                                    <img className="img-fluid" src="/noi.ico" alt="noi.ico" />
                                                    <div className="title me-2">
                                                        <strong>Alexandre P.</strong><br />
                                                        <label>Assistant juridique</label>
                                                        <p className="rating text-warning">★ ★ ★ ★ ★</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-12 p-md-2 p-1">
                                            <div className="card">
                                                <div className="card-body px-md-3">
                                                    <p className="msg p-md-5 p-2">
                                                        La bibliothèque de templates a réduit notre temps de création de documents de 70%.
                                                        Les en-têtes professionnels sont maintenant notre signature visuelle.
                                                    </p>
                                                </div>
                                                <div className="card-footer border-0 d-flex bg-transparent">
                                                    <img className="img-fluid" src="/noi.ico" alt="noi.ico" />
                                                    <div className="title me-2">
                                                        <strong>Marine L.</strong><br />
                                                        <label>Responsable administrative</label>
                                                        <p className="rating text-warning">★ ★ ★ ★ ★</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-12 p-md-2 p-1">
                                            <div className="card">
                                                <div className="card-body px-md-3">
                                                    <p className="msg p-md-5 p-2">
                                                        Enfin une solution simple pour uniformiser nos comptes-rendus médicaux.
                                                        L'insertion automatique du logo et des coordonnées est révolutionnaire pour notre service.
                                                    </p>
                                                </div>
                                                <div className="card-footer border-0 d-flex bg-transparent">
                                                    <img className="img-fluid" src="/noi.ico" alt="noi.ico" />
                                                    <div className="title me-2">
                                                        <strong>Dr. Simon T</strong><br />
                                                        <label>Médecin hospitalier</label>
                                                        <p className="rating text-warning">★ ★ ★ ★ ★</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item active">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4 col-12 p-md-2 p-1">
                                            <div className="card">
                                                <div className="card-body px-md-3">
                                                    <p className="msg p-md-5 p-2">
                                                        Créez des en-têtes personnalisés pour chaque client en 30 secondes.
                                                        Cette application a donné une touche pro à tous nos documents commerciaux
                                                    </p>
                                                </div>
                                                <div className="card-footer border-0 d-flex bg-transparent">
                                                    <img className="img-fluid" src="/noi.ico" alt="noi.ico" />
                                                    <div className="title me-2">
                                                        <strong>Émilie R.</strong><br />
                                                        <label>Chef de projet événementiel</label>
                                                        <p className="rating text-warning">★ ★ ★ ★ ★</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-12 p-md-2 p-1">
                                            <div className="card">
                                                <div className="card-body px-md-3">
                                                    <p className="msg p-md-5 p-2">


                                                        Plus besoin de Word compliqué !
                                                        Votre application génère mes factures avec en-tête réglementaire en 2 clics.
                                                        Un gain de productivité inestimable.
                                                    </p>
                                                </div>
                                                <div className="card-footer border-0 d-flex bg-transparent">
                                                    <img className="img-fluid" src="/noi.ico" alt="noi.ico" />
                                                    <div className="title me-2">
                                                        <strong>Mehdi K.</strong><br />
                                                        <label>Comptable indépendant</label>
                                                        <p className="rating text-warning">★ ★ ★ ★ ★</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-12 p-md-2 p-1">
                                            <div className="card">
                                                <div className="card-body px-md-3">
                                                    <p className="msg p-md-5 p-2">
                                                        Tous les documents officiels de l'école ont maintenant
                                                        une identité visuelle cohérente grâce à votre solution.
                                                        Même les enseignants les moins technophiles l'adoptent !"
                                                    </p>
                                                </div>
                                                <div className="card-footer border-0 d-flex bg-transparent">
                                                    <img className="img-fluid" src="/noi.ico" alt="noi.ico" />
                                                    <div className="title me-2">
                                                        <strong>Nathalie D.</strong><br />
                                                        <label>Directrice d'école</label>
                                                        <p className="rating text-warning">★ ★ ★ ★ ★</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-button-control">
                            <button type="button" className="carousel-control-prev bg-black rounded-pill" data-bs-target="#myCarouselTestimonie" data-bs-slide="prev"><span className="bi bi-arrow-left"></span></button>
                            <button type="button" className="carousel-control-next bg-black rounded-pill" data-bs-target="#myCarouselTestimonie" data-bs-slide="next"><span className="bi bi-arrow-right"></span></button>
                        </div>
                    </div>

                </div>
            </section>
            <section>

            </section>
        </>
    )
}

export default Home;