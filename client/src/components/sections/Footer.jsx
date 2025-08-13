import { useState } from "react"

export default function Footer() {
    const [email, setEmail] = useState('')

    const newsletter = (e) => {
        e.preventDefault();
        console.log('Newsletter a été envoyé: ' + email);

    }
    return (
        <footer className="container-fluid newsletterSection">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <h1 className="text-white">Newsletter</h1>
                        <p>Abonnez-vous pour rester imformé de toutes nouvelles, consernant les entêtes</p>
                    </div>
                    <div className="col-md-6 col-12">
                        <form onSubmit={newsletter} action="" method="post" className="space-y-4 px-md-5 px-2">
                            <div className="input-group my-3">
                                <label htmlFor="email" className="input-group-text">@</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form-control py-2"
                                    placeholder="Email"
                                />
                            </div>
                            <button type="submit" className="btn text-white bg-black py-2 bg-gradient col-12">Subscription</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-3 col-12"></div>
                    <div className="col-md-3 col-12">
                        <a href="/politiques">Politique de confidentialité</a>
                    </div>
                    <div className="col-md-3 col-12">
                        <a href="/conditions">Condition d'utilisation</a>
                    </div>
                </div>
            </div>
            <div className="container text-light mt-3 fw-lighter">

                <small>(c) copyRight 2025 Powered by NOi DOCS</small>
            </div>
        </footer>
    )
}