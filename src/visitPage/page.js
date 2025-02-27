import React from 'react';
import './styles.css';
import LogoFabrica from '../assets/logo-pulo-do-gato.png';
import VideoSlider from '../componentes/videoSlider/videoSlider';



const VisitPage = () => {

  return (
    <>
      <div className="container-method-landing">

        <img className="logo-fabrica" src={LogoFabrica} alt="Promoção" />


        <div class="title">
          <h1>O <cores> pulo do Gato </cores>para estudar em qualquer lugar</h1>
        </div>

        <div className="container-modulos">
          <div className="modulo-iniciante">
           
          </div>
        </div>

      </div>



    </>
  );
};

export default VisitPage;
