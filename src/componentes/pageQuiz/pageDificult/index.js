import React from 'react';
import './style.css';
import Apostila from '../../../assets/CAPA.png'
import { useNavigate } from 'react-router-dom';

const QuizDificult = () => {
  const navigate = useNavigate();
  const goToquizResponseDificult = () => {
    navigate('/quizResponseDificult');
  }
 
    return (

    <div id="container-quiz">

      <div id="container-logo">
        
      <img class="Apostila-capa" alt="apostila" src={Apostila} />
      </div>

      <div id="container-progress-difficult">

        <div id="progress5">
        </div>

        <div id="progress6">
        </div>

      </div>

      <div id="container-text" >
        <h1 class="question-dificult">Como avalia seu nivel no contrabaixo?</h1>
      </div>

      <div id="container-buttons2" onClick={goToquizResponseDificult} >
        <div id="Button-Age">
          <h2>Consigo tocar músicas simples</h2>
        </div>
      </div>
     
     <div id="container-buttons2" onClick={goToquizResponseDificult} >
        <div id="Button-Age">
          <h2>Não tenho muita velocidade</h2>
        </div>
      </div>
      
      <div id="container-buttons2" onClick={goToquizResponseDificult}>
        <div id="Button-Age">
          <h2>Tenho dificuldades em criar</h2>
        </div>
      </div>

      <div id="container-buttons2" onClick={goToquizResponseDificult} >
        <div id="Button-Age">
          <h2>Sinto que não tenho direção </h2>
        </div>
      </div>






    </div>

  )
}

export default QuizDificult