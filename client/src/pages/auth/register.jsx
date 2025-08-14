import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./login.css"

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_Password] = useState('');
  const [consent, setConsent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration attempt with:', { email, password });
  };

  return (
    <section className="connexion min-h-screen flex items-center justify-center">
      <div className="row justify-content-center align-items-center">
        <form onSubmit={handleSubmit} className="space-y-4 formulaire col-md-4 col-11">
          <img src="/noi.ico" alt="" width={100} className='mb-5'/>
          <h2 className="text-2xl font-bold mb-4">Inscription</h2>
          <div className='form-group mb-2'>
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
            />
          </div>
          <div className='form-group mb-2'>
            <input
              type="password"
              placeholder="Mot de passe"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-required="true"
            />
          </div>
          <div className='form-group mb-2'>
            <input
              type="password"
              placeholder="Confirmer le mot de passe"
              className="form-control"
              value={confirm_password}
              onChange={(e) => setConfirm_Password(e.target.value)}
              required
              aria-required="true"
            />
          </div>
          <div className='form-check my-3 text-start'>
            <input
              type="checkbox"
              placeholder="consentement"
              className="form-check-input form"
              id='consent'
              value={consent}
              required
              aria-required="true"
              onChange={(e) => setConsent(e.target.value)}
            />
            <p htmlFor='consent'>Êtes-vous d'accord avec nos <Link to={"/conditions"}>conditions d'utilisations</Link> ainsi que notre <Link to={"/politiques"}>politique de confidentialité</Link></p>
          </div>
          <button
            type="submit"
            className="btn btn-dark bg-gradient col-12 my-3"
          >
            S'inscrire
          </button>
        </form>
        <p className="mt-4 text-center">
          Déjà inscrit ? <Link to="/login" className="text-white">Se connecter</Link>
        </p>
        <h6 className='my-3 text-light'>Vous pouvez connecter</h6>
        <div className="rsConnexions ">
          <a href="" className="btn btn-outline-light mx-2"><i className="bi bi-google"></i></a>
          <a href="" className="btn btn-outline-light mx-2"><i className="bi bi-facebook"></i></a>
        </div>
      </div>
    </section>
  );
}