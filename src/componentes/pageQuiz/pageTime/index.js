import React from 'react';
import './style.css';
import Logo from '../../../assets/logo-pulo-do-gato.png'
import { useNavigate } from 'react-router-dom';

import Apostila from '../../../assets/CAPA.png'
const QuizTime = () => {

  const navigate = useNavigate();
  const goToquizInsta = () => {
    navigate('/');
  }


  return (

    <div id="container-quiz">

      <div id="container-logo">
      <img class="Apostila-capa" src={Apostila} />
      </div>

      <div id="container-progress-time">

        <div id="progress9">
        </div>

        <div id="progress10">
        </div>

      </div>

      

      <div id="container-text">
        <h1 class="question">Oque te impede de evoluir?</h1>
        <p>Escolha uma das opções abaixo!</p>
      </div>

      <div id="container-buttons2"  onClick={goToquizInsta} >
        <div id="Button-Age">
          <h2>Falta de tempo para estudar.</h2>
        </div>
      </div>

      <div id="container-buttons2"  onClick={goToquizInsta}  >
        <div id="Button-Age">
          <h2>Não tenho um método.</h2>
        </div>
      </div>
     
     <div id="container-buttons2"  onClick={goToquizInsta} >
        <div id="Button-Age">
          <h2>Falta de confiança. </h2>
        </div>
      </div>
      
      <div id="container-buttons2"  onClick={goToquizInsta}  >
        <div id="Button-Age">
          <h2>Não sei por onde começar.</h2>
        </div>
      </div>

      






    </div>

  )
}

export default QuizTime