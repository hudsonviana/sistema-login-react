import React, { useContext } from 'react';
import './App.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from './contexts/Auth/AuthContext';

const App = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/private');
  };

  return (
    <div>
      <header>
        <h1>Header do site</h1>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/private'}>Página privada</Link>
          {auth.user && <button onClick={handleLogout}>Sair</button>}
        </nav>
      </header>

      <Outlet />
    </div>
  );
};

export default App;
