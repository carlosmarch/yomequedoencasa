import React, { Component } from "react";

class Hero extends Component {
  render() {

    return (
        <div className="hero-section">
          <div className="bg-styled">
            <img src={process.env.PUBLIC_URL + '/img/line.svg'} className=""/>
          </div>

          <div className="container">
                <div class="grid">
                      <div class="grid__item width-6/12">
                        <h1 className="">Quédate en casa</h1>
                        <p className="hero">Crea rutas de preguntas personalizadas con un número ilimitado de <b>Saltos Lógicos.</b> Saluda a las personas por el nombre o segméntalas por canal con <b>Campos Ocultos.</b> Haz seguimiento de forma personalizada en <b>Hubspot</b> o <b>Mailchimp.</b> Y optimiza tus campañas de marketing con <b>Google Tag Manager</b> o <b>Facebook pixel.</b></p>
                        <a href="#" className="arrow">Descubre qué es posible</a>
                      </div>
                      <div class="grid__item width-6/12">
                      </div>
              </div>
        </div>
      </div>

    );
  }
}

export default Hero;