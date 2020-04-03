import React, { Component } from "react";

import BlockTitle from './components/BlockTitle';

class About extends Component {
  render() {

    return (
      <div className="global">
        <div className="container container-s">
          <BlockTitle title={'About'}/>
          <div className="AboutContent mt-s">

            <h5 className="mb-s">¿Cómo puedo ayudar a mis amigos (y a mí mismo) a pasar un tiempo más entretenido durante la cuarentena?</h5>
            <p>El proyecto empieza durante la cuarentena de marzo por el COVID-19. </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
