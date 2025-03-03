import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import Logo from '../assets/logo.png';

const VisitPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container-method-landing">
      <img className="logo-fabrica" src={Logo} alt="Promoção" />

      <div className="title">
        <h1>O <span className="highlight">pulo do Gato</span> para estudar em qualquer lugar</h1>
      </div>

      <div className="container-cards">
        <div className='container-cards-in'>
          <img className="img-harmonia" onClick={() => navigate('/harmonia')} src="/assets/harmonia.png" alt="Harmonia" />
        </div>
        <div className='container-cards-in'>
          <img className="img-harmonia" onClick={() => navigate('/acordes')} src="/assets/acordes.png" alt="Acordes" />
        </div>
        <div className='container-cards-in'>
          <img className="img-harmonia" onClick={() => navigate('/arpejos')} src="/assets/arpejos.png" alt="Arpejos" />
        </div>
        <div className='container-cards-in'>
          <img className="img-harmonia" onClick={() => navigate('/slap')} src="/assets/slap.png" alt="Slap" />
        </div>
      </div>
    </div>
  );
};

export default VisitPage;
