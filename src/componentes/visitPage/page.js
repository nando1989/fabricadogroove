import React from 'react';
import './styles.css';
import Afinação from '../../assets/AFINAÇÃO.png';
import Cifra from '../../assets/cifra.png';
import Tablatura from '../../assets/TABLATURA.png';
import Intervalos from '../../assets/INTERVALOS.png';
import Acordes from '../../assets/ACORDES.png';
import Depoimento1 from '../../assets/depoimento1.jpg';
import Depoimento2 from '../../assets/depo2.jpg';
import Depoimento3 from '../../assets/depo3.jpg';
import LogoFabrica from '../../assets/logo-pulo-do-gato.png';



const VisitPage = () => {

  const goToHotmart = () => {
    window.open('https://pay.hotmart.com/N96501436V?checkoutMode=10&bid=1731259011708');
  }

  return (
    <>
      <div className="container-method-landing">
        
          <img className="logo-fabrica" src={LogoFabrica} alt="Promoção" />
        

        <div class="title">
          <h1>O <cores> pulo do Gato </cores>para estudar em qualquer lugar</h1>
        </div>

        <div class="video">
          <iframe class="player" src="https://www.youtube.com/embed/S8BQLFYwTBo?si=5joEDgAE5Dfx-kgc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div class="container-button-buy">
          <button class="button-buy" onClick={goToHotmart} >Comprar</button>

          <h3>"A importância de um método está em sua capacidade de criar consistência. O crescimento, seja pessoal, profissional ou técnico, raramente ocorre de forma linear e imediata. No entanto, ao adotar um processo com etapas bem definidas, é possível lidar melhor com desafios e aproveitar os aprendizados ao longo do caminho." - Fernando de souza </h3>
          <h1 className="title-apostila">Conteúdo da apostila.</h1>
        </div>

      </div>

      <div className="container-main">

        <div className="container-img-apostila">
          <h2>Afinação</h2>
          <img className="img-apostila" src={Afinação} alt="Promoção" />
        </div>

        <div className="container-img-apostila">
          <h2>Cifras</h2>
          <img className="img-apostila" src={Cifra} alt="Promoção" />
        </div>

        <div className="container-img-apostila">
          <h2>Tablatura</h2>
          <img className="img-apostila" src={Tablatura} alt="Promoção" />
        </div>

        <div className="container-img-apostila">
          <h2>Intervalos</h2>
          <img className="img-apostila" src={Intervalos} alt="Promoção" />
        </div>

        <div className="container-img-apostila">
          <h2>acordes</h2>
          <img className="img-apostila" src={Acordes} alt="Promoção" />
        </div>

        <div className="container-img-print">
          <branco>e muito mais...</branco>
          <h2>Veja abaixo alguns depoimentos</h2>
          <img className="img-dep" src={Depoimento1} alt="Promoção" />
          <img className="img-dep" src={Depoimento2} alt="Promoção" />
          <img className="img-dep" src={Depoimento3} alt="Promoção" />
          <button class="button-buy-footer" onClick={goToHotmart} >Comprar</button>
        </div>
      </div>
    </>
  );
};

export default VisitPage;
