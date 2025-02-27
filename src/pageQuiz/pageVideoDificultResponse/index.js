import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import Apostila from '../../../assets/CAPA.png'

const QuizResponseDificult = () => {
  
  const navigate = useNavigate();
  const goToquizTime = () => {
    navigate('/quizTime');
  };

  return (
    <>
      <div id="container-quiz">
        <div id="container-logo">
        <img class="Apostila-capa" alt="apostila" src={Apostila} />
        </div>

        <div id="container-progress-video">
          <div id="progress7">
          </div>
          <div id="progress8">
          </div>
        </div>

        <div id="container-text-veideo">
          <h1 class="question"> Vamos evoluir ?</h1>
        </div>

        <div id="container-buttons">
          <iframe
            className="lesson2"
            src="https://www.youtube.com/embed/Zy0KcipJqjw?si=mL84ueATjeYkF42z"
            title="YouTube video player"
            allow="accelerometer; autoplay; gyroscope; "
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
          />
        </div>

        <div id="container-buttons4" >
          <div id="Button-video" onClick={goToquizTime}>
            <h2>Eu quero evoluir</h2>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default QuizResponseDificult