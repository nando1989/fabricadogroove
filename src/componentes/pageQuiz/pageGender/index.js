import React from 'react';
import './style.css';
import BassMan from '../../../assets/bassMan.png'
import BassWoman from '../../../assets/basswoman.png'
import Logo from '../../../assets/logo-pulo-do-gato.png'
import Apostila from '../../../assets/CAPA.png'
import { useNavigate } from 'react-router-dom';

const QuizGender = () => {
  const navigate = useNavigate();
  const goToquizAge = () => {
    navigate('/quizAge');
  };

  return (
    <>
      <div id="container-quiz">

        <div id="container-logo">
        <img class="Apostila-capa" src={Apostila} />
        </div>

        <div id="container-progress-gender">

          <div id="progress1">
          </div>

          <div id="progress2">
          </div>

        </div>

        <div id="container-text">
          <h1 class="question"> Vamos começar!</h1>
          <p>Escolha uma das opções abaixo!</p>
        </div>

        <div id="container-buttons">

          <div id="img-male-gender" onClick={goToquizAge}>
            <img class="bass-Man-gender" src={BassMan} />
            
          </div>

        
            <div id="img-female-gender" onClick={goToquizAge}  >
              <img class="bass-woman-gender" src={BassWoman} />
              
            </div>

            
          

        </div>
      </div>
    </>
  )
}

export default QuizGender