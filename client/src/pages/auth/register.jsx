import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration attempt with:', { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-xs w-full">
        <h2 className="text-2xl font-bold mb-4">Inscription</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Mot de passe"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-green-500 text-white p-2 rounded"
          >
            S'inscrire
          </button>
        </form>
        <p className="mt-4 text-center">
          Déjà inscrit ? <Link to="/login" className="text-blue-500">Se connecter</Link>
        </p>
      </div>
    </div>
  );
}