import React from 'react';
import './styles.css';
import LogoFabrica from '../assets/logo-pulo-do-gato.png';
import Harmonia from '../assets/harmonia.png';



const VisitPage = () => {

  return (
    <>
      <div className="container-method-landing">
        <img className="logo-fabrica" src={LogoFabrica} alt="Promoção" />
        <div class="title">
          <h1>O <cores> pulo do Gato </cores>para estudar em qualquer lugar</h1>
        </div>
        <div className="container-cards">
          <div className='container-cards-in'>
            <img className="img-harmonia" src={Harmonia} alt="Promoção" />
          </div>
          <div className='container-cards-in'>
            <img className="img-harmonia" src={Harmonia} alt="Promoção" />
          </div>
          <div className='container-cards-in'>
            <img className="img-harmonia" src={Harmonia} alt="Promoção" />
          </div>
          <div className='container-cards-in'>
            <img className="img-harmonia" src={Harmonia} alt="Promoção" />
          </div>

        </div>
      </div>
    </>
  );
};

export default VisitPage;
