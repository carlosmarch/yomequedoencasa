import React, { Component } from "react";

class Hero extends Component {
  render() {

    return (
        <div className="hero-section">
          <div className="bg-styled">
            <img src={process.env.PUBLIC_URL + '/img/line.svg'} className="" alt="lines"/>
          </div>

          <div className="container">
                <div className="grid">
                      <div className="grid__item width-6/12">
                        <h1 className="hero-title">Me quedo en casa</h1>
                        <p className="hero-text">Hola!! Bla bla bla bla bla bla bla bla blabla bla bla bla bla blabla blabla blabla blabla bla <b>bla bla.</b> bla blabla blabla blabla blabla blabla <b>bla bla</b> blabla <b>bla bla</b> bla.</p>
                        <a className="arrow" href="https://airtable.com/tblPHqTD0CnmiWwAN/viwOPZ0TiEQRSWSc9">Empieza ahora</a>
                      </div>
                      <div className="grid__item width-6/12">
                        <div className="col-xs-12 col-md-6 col-md-offset-1 image-container">
                                <div className="image-column">
                                  <img className="image-1" src={process.env.PUBLIC_URL + '/img/cover-1.jpg'} alt="international person"/>
                                  <img className="image-2" src={process.env.PUBLIC_URL + '/img/cover-2.jpg'} alt="international person"/>
                                  <img className="image-3" src={process.env.PUBLIC_URL + '/img/cover-3.png'} alt="international person"/>
                                  <img className="image-4" src={process.env.PUBLIC_URL + '/img/cover-4.jpg'} alt="international person"/>
                                </div>
                                <div className="image-column">
                                  <img className="image-1" src={process.env.PUBLIC_URL + '/img/cover-7.jpg'} alt="international person"/>
                                  <img className="image-2" src={process.env.PUBLIC_URL + '/img/cover-8.png'} alt="international person"/>
                                  <img className="image-3" src={process.env.PUBLIC_URL + '/img/cover-9.png'} alt="international person"/>
                                </div><div className="image-column">
                                  <img className="image-1" src={process.env.PUBLIC_URL + '/img/cover-1.jpg'} alt="international person"/>
                                  <img className="image-2" src={process.env.PUBLIC_URL + '/img/cover-2.jpg'} alt="international person"/>
                                  <img className="image-3" src={process.env.PUBLIC_URL + '/img/cover-3.png'} alt="international person"/>
                                  <img className="image-4" src={process.env.PUBLIC_URL + '/img/cover-4.jpg'} alt="international person"/>
                                  <img className="image-5" src={process.env.PUBLIC_URL + '/img/cover-5.jpg'} alt="international person"/>
                                  <img className="image-6" src={process.env.PUBLIC_URL + '/img/cover-6.jpg'} alt="international person"/>
                                  <img className="image-7" src={process.env.PUBLIC_URL + '/img/cover-7.jpg'} alt="international person"/>
                                  <img className="image-8" src={process.env.PUBLIC_URL + '/img/cover-8.png'} alt="international person"/>
                                </div>
                                <div className="image-column">
                                  <img className="image-1" src={process.env.PUBLIC_URL + '/img/cover-1.jpg'} alt="international person"/>
                                  <img className="image-2" src={process.env.PUBLIC_URL + '/img/cover-2.jpg'} alt="international person"/>
                                  <img className="image-3" src={process.env.PUBLIC_URL + '/img/cover-3.png'} alt="international person"/>
                                  <img className="image-4" src={process.env.PUBLIC_URL + '/img/cover-4.jpg'} alt="international person"/>
                                </div>
                                <div className="image-column">
                                  <img className="image-1" src={process.env.PUBLIC_URL + '/img/cover-6.jpg'} alt="international person"/>
                                  <img className="image-2" src={process.env.PUBLIC_URL + '/img/cover-7.jpg'} alt="international person"/>
                                  <img className="image-3" src={process.env.PUBLIC_URL + '/img/cover-8.png'} alt="international person"/>
                                </div>
                                <div className="shadow"></div>
                        </div>
                      </div>
              </div>
        </div>
      </div>

    );
  }
}

export default Hero;
