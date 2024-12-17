
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import '../register/styles.css';
import Logo from '../../assets/logo.png'



const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, name, phone, password);
      navigate('/login');
    } catch (error) {
      alert('Erro ao cadastrar: ' + error.message);
    }
  };

  return (
  
      <div className='main-register'>
        
        
        
        <form className='container-register' onSubmit={handleRegister}>
          <img className='img-logo'  alt="logo" src={Logo}/>
          <h2>Cadastro</h2>
          
          
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome completo"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Telefone"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            required
          />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    
  );
};

export default Register;