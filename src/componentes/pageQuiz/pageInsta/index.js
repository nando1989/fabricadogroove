import React from 'react';
import './style.css';
import Logo from '../../../assets/logo-pulo-do-gato.png'
import Insta from '../../../assets/instaFabrica.png'
import Apostila from '../../../assets/CAPA.png'
import { useNavigate } from 'react-router-dom';

const QuizInsta = () => {

  const navigate = useNavigate();
  const goToquizInsta = () => {
    navigate('/quizInsta');
  }


  return (

    <div id="container-quiz2">

      <div id="container-logo2">
      <img class="Apostila-capa" src={Apostila} />
      </div>

      <div id="container-text2">
        <h1 class="question"> Vamos começar!</h1>
        <p>Escolha uma das opções abaixo!</p>

      </div>
     
     <img id="imgInsta" src={Insta} />

     <div id="container-buttons4" >
          <div id="Button-video" >
            <h2>Quero evoluir >></h2>
          </div>
        </div>
    
    </div>

    

  )
}

export default QuizInsta