import React from 'react';
import './style.css';
import Logo from '../../../assets/logo-pulo-do-gato.png'
import Apostila from '../../../assets/CAPA.png'
import { useNavigate } from 'react-router-dom';

const QuizAge = () => {

  const navigate = useNavigate();
  const goToquizDificult = () => {
    navigate('/quizDificult');
  }

  return (

    <div id="container-quiz">
      <div id="container-logo">
        <img class="Apostila-capa" src={Apostila} />
      </div>

      <div id="container-progress-age">
        <div id="progress3">
        </div>

        <div id="progress4">
        </div>
      </div>

      <div id="container-text">
        <h1 class="question">Qual a sua maior dificuldade em teoria musical?</h1>
        <p>Escolha uma das opções abaixo!</p>
      </div>

      <div id="container-buttons2" onClick={goToquizDificult}>
        <div id="Button-Age">
          <h2>Entender escalas</h2>
        </div>
      </div>

      <div id="container-buttons2" onClick={goToquizDificult}>
        <div id="Button-Age">
          <h2>Aplicação dos intervalos </h2>
        </div>
      </div>

      <div id="container-buttons2" onClick={goToquizDificult}>
        <div id="Button-Age">
          <h2>Tirar musicas de ouvido </h2>
        </div>
      </div>

      <div id="container-buttons2" onClick={goToquizDificult}>
        <div id="Button-Age">
          <h2>Aplicar a teoria tocando</h2>
        </div>
      </div>
    </div>

  )
}

export default QuizAge