import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig'; // Importa apenas o necessário
import { useNavigate } from 'react-router-dom';
import './styles.css';
import Logo from '../assets/logo.png'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/visitPage');
    } catch (error) {
      const errorMessages = {
        'auth/user-not-found': 'Usuário não encontrado.',
        'auth/wrong-password': 'Senha incorreta.',
        'auth/invalid-email': 'E-mail inválido.',
      };
      alert(errorMessages[error.code] || 'Erro ao fazer login. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const goToRegister = () => {
    navigate('/register');
  };

  const goToMemberPage = () => {
    navigate('/visitPage');
  };

  const goToFastNote = () => {
    navigate('/fastNote');
  };

  return (
    <div className="main-login">
      <div className="container-login">
        <form className="container-form" onSubmit={handleLogin}>
          <img className="img-logo" alt="logo" src={Logo} />

          <h2>Login</h2>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            required
          />

          <button
            className="loginButton"
            type="submit"
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? 'Entrando...' : 'Entrar'}
          </button>

          <button
            className="registerButton"
            type="button"
            onClick={goToRegister}
          >
            Registrar
          </button>

          <button
            className="fastNoteButton"
            type="button"
            onClick={goToFastNote}
          >
          Editor de cifras
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
