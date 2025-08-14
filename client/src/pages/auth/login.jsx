import { useState } from 'react';
import { Link, useNavigate, useLocation, replace } from 'react-router-dom';
import "./login.css"
import { useAuth } from '@contexts/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();



    const logedIn = await login(email, password);
    if (logedIn) {
      // <Navigate to="/dashboard" state={"connexion effectué"} replace />
      const redirectPath = location.state?.from || '/dashboard';
      navigate(redirectPath, {replace:true});
    }
  };

  return (
    <section className="connexion min-h-screen flex items-center justify-center">
      <div className="row justify-content-center align-items-center">
        <form onSubmit={handleSubmit} className="space-y-4 formulaire col-md-6 col-11">
          <img src="/noi.ico" alt="" width={100} className='mb-5' />
          <h2 className="text-2xl font-bold mb-4">Connexion</h2>
          <div className='form-group my-3'>
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
          <div className='form-group my-3'>
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
          <div className='form-check my-3 text-start'>
            <input
              type="checkbox"
              placeholder="rememberMe"
              className="form-check-input form"
              id='rememberMe'
              value={rememberMe}
              onChange={(e) => setRememberMe(e?.target.value)}
            />
            <label htmlFor='rememberMe'>Remember me</label>
          </div>
          <span>Mot de passe oublié ? <Link to={"/forgotPassword"}>Réinitialiser</Link></span>
          <button
            type="submit"
            className="btn btn-dark bg-gradient col-12"
          >
            Se connecter
          </button>
        </form>
        <p className="mt-4 text-center">
          Pas de compte ? <Link to="./register" className="text-white">S'inscrire</Link>
        </p>
        <h6 className='my-3 text-light'>Vous pouvez connecter</h6>
        <div className="rsConnexions ">
          <Link to="" className="btn btn-outline-light mx-2"><i className="bi bi-google"></i></Link>
          <Link to="" className="btn btn-outline-light mx-2"><i className="bi bi-facebook"></i></Link>
        </div>
      </div>
    </section>
  );
}