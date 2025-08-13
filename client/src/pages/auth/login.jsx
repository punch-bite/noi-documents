import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./login.css"

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
  };

  return (
    <section className="container-fluid connexion min-h-screen flex items-center justify-center">
      <div className="">
        <form onSubmit={handleSubmit} className="spaces-y-4 formulaire">
          <h2 className="text-2xl font-bold mb-4">Connexion</h2>
          <div className='form-group my-3'>
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='form-group my-3'>
            <input
              type="password"
              placeholder="Mot de passe"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-dark bg-gradient col-12"
          >
            Se connecter
          </button>
        </form>
        <p className="mt-4 text-center">
          Pas de compte ? <Link to="/register" className="text-blue-500">S'inscrire</Link>
        </p>
        <h6 className='my-3'>Vous pouvez connecter</h6>
        <div className="rsConnexions ">
          <Link to="" className="btn btn-outline-light mx-2"><i className="bi bi-google"></i></Link>
          <Link to="" className="btn btn-outline-light mx-2"><i className="bi bi-facebook"></i></Link>
        </div>
      </div>
    </section>
  );
}