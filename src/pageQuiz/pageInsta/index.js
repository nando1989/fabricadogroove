import React from 'react';
import './style.css';
import Insta from '../../../assets/instaFabrica.png'
import Apostila from '../../../assets/CAPA.png'

const QuizInsta = () => {

  return (

    <div id="container-quiz2">

      <div id="container-logo2">
      <img class="Apostila-capa" alt="apostila"src={Apostila} />
      </div>

      <div id="container-text2">
        <h1 class="question"> Vamos começar!</h1>
        <p>Escolha uma das opções abaixo!</p>

      </div>
     
     <img id="imgInsta" alt="instagram" src={Insta} />

     <div id="container-buttons4" >
          <div id="Button-video" >
            <h2>'Quero evoluir >>'</h2>
          </div>
        </div>
    
    </div>
    )
}

export default QuizInsta