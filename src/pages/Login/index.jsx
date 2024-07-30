import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (email && password) {
      const isLogged = await auth.signIn({ email, password });

      if (isLogged) {
        navigate('/');
      } else {
        alert('Credenciais inválidas');
      }
    }
  };

  // https://www.youtube.com/watch?v=iD94avNeoXM&t=553s
  // PAREI EM 1:15:15

  return (
    <div>
      <h2>Página fechada</h2>

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          onChange={handleInputChange}
        />
        <button type="submit">Fazer login</button>
      </form>
    </div>
  );
};

export default Login;
