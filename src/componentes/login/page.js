
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import '../login/styles.css';
import Logo from '../../assets/logo.png'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/MemberPage');
    } catch (error) {
      alert('Erro ao fazer login: ' + error.message);
    }
  };

  const goToRegister = () => {
    navigate('/register');
  };
  const goToMemberPage = () => {
    navigate('/visitPage');
  };

  return (
    <><div className='main-login'>
      <div className='container-login'>
        <form className='container-form' onSubmit={handleLogin}>

          <img className='img-logo' src={Logo}/>
          
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

          <button className='loginButton' type="submit">Entrar</button>
          <button className='registerButton' type="button" onClick={goToRegister}>Registrar</button>
          <button className='visitButton' type="button" onClick={goToMemberPage}>Visitante</button>
        </form>
      </div>
    
    </div>
    </>
  );
};

export default Login;