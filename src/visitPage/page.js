import React from 'react';
import './styles.css';
import Logo from '../assets/logo.png';
import Harmonia from '../assets/harmonia.png';
import Acordes from '../assets/acordes.png';
import Arpejos from '../assets/arpejos.png';
import Slap from '../assets/slap.png';
import { useNavigate } from 'react-router-dom';


const VisitPage = () => {
  const navigate = useNavigate();

  const goToHarmonia = () => {
    navigate('/harmonia');
  };
  const goToAcordes = () => {
    navigate('/acordes');
  };
  const goToArpejos = () => {
    navigate('/Arpejos');
  };
  const goToSlap = () => {
    navigate('/slap');
  };
  return (
    <>
      <div className="container-method-landing">
        <img className="logo-fabrica" src={Logo} alt="Promoção" />
        <div class="title">
          <h1>O <cores> pulo do Gato </cores>para estudar em qualquer lugar</h1>
        </div>
        <div className="container-cards">
          <div className='container-cards-in'>
            <img className="img-harmonia" onClick={goToHarmonia} src={Harmonia} alt="Promoção" />
          </div>
          <div className='container-cards-in'>
            <img className="img-harmonia" onClick={goToAcordes} src={Acordes} alt="Promoção" />
          </div>
          <div className='container-cards-in'>
            <img className="img-harmonia" onClick={goToArpejos} src={Arpejos} alt="Promoção" />
          </div>
          <div className='container-cards-in'>
            <img className="img-harmonia" onClick={goToSlap} src={Slap} alt="Promoção" />
          </div>


        </div>
      </div>
    </>
  );
};

export default VisitPage;
