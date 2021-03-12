import React, { Component } from 'react';
import '../css/Timeline.scss';

class Timeline extends Component {
  render() {
    return (
      <section id="timeline">
        <h1>Linha do tempo</h1>
        <p className="leader">
          <em>
            Essa linha do tempo referência meus projetos em ordem de aprendizado
            com uma escala de 7 meses
          </em>
        </p>
        <div className="demo-card-wrapper">
          <div className="demo-card demo-card--step1">
            <div className="head">
              <div className="number-box">
                <span>01</span>
              </div>
              <h2>To-do-list</h2>
            </div>
            <div className="body">
              <p>
                Esse projeto simula uma lista de afazeres onde você pode
                preencher a lista com alguma tarefa que deseja, e ela ficara
                armazenada mesmo depois de navegar para outra página.
              </p>
              <img alt="projeto to-do-list" />
            </div>
          </div>
          <div className="demo-card demo-card--step2">
            <div className="head">
              <div className="number-box">
                <span>02</span>
              </div>
              <h2>
                <span className="small">Subtitle</span> Confidence
              </h2>
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                reiciendis deserunt doloribus consequatur, laudantium odio
                dolorum laboriosam.
              </p>
              <img src="http://placehold.it/1000x500" alt="Graphic" />
            </div>
          </div>
          <div className="demo-card demo-card--step3">
            <div className="head">
              <div className="number-box">
                <span>03</span>
              </div>
              <h2>
                <span className="small">Subtitle</span> Adaptation
              </h2>
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                reiciendis deserunt doloribus consequatur, laudantium odio
                dolorum laboriosam.
              </p>
              <img src="http://placehold.it/1000x500" alt="Graphic" />
            </div>
          </div>
          <div className="demo-card demo-card--step4">
            <div className="head">
              <div className="number-box">
                <span>04</span>
              </div>
              <h2>
                <span className="small">Subtitle</span> Consistency
              </h2>
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                reiciendis deserunt doloribus consequatur, laudantium odio
                dolorum laboriosam.
              </p>
              <img src="http://placehold.it/1000x500" alt="Graphic" />
            </div>
          </div>
          <div className="demo-card demo-card--step5">
            <div className="head">
              <div className="number-box">
                <span>05</span>
              </div>
              <h2>
                <span className="small">Subtitle</span> Conversion
              </h2>
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                reiciendis deserunt doloribus consequatur, laudantium odio
                dolorum laboriosam.
              </p>
              <img src="http://placehold.it/1000x500" alt="Graphic" />
            </div>
          </div>
          <div className="demo-card demo-card--step6">
            <div className="head">
              <div className="number-box">
                <span>06</span>
              </div>
              <h2>
                <span className="small">Subtitle</span> Conversion
              </h2>
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                reiciendis deserunt doloribus consequatur, laudantium odio
                dolorum laboriosam.
              </p>
              <img src="http://placehold.it/1000x500" alt="Graphic" />
            </div>
          </div>
          <div className="demo-card demo-card--step7">
            <div className="head">
              <div className="number-box">
                <span>07</span>
              </div>
              <h2>
                <span className="small">Subtitle</span> Conversion
              </h2>
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                reiciendis deserunt doloribus consequatur, laudantium odio
                dolorum laboriosam.
              </p>
              <img src="http://placehold.it/1000x500" alt="Graphic" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Timeline;
