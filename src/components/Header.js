import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import Signup from '../views/Signup';


class Header extends Component {

  constructor(){
      super();
      this.state = {
          isHoveredCategorias: false,
          isHoveredTemas: false,
          categorias: [],
          temas: [],
          email:''
      };
      this.handleHoverCategorias = this.handleHoverCategorias.bind(this);
      this.handleHoverTemas = this.handleHoverTemas.bind(this);
  }

  handleHoverCategorias(){
      this.setState(prevState => ({
          isHoveredCategorias: !prevState.isHoveredCategorias
      }));

      this.setState({
        categorias: window.$categories,
        temas: window.$topics
      });
  }

  handleHoverTemas(){
      this.setState(prevState => ({
          isHoveredTemas: !prevState.isHoveredTemas
      }));
      this.setState({
        categorias: window.$categories,
        temas: window.$topics
      });
  }

  emailChangeHandler = (event) => {
    this.setState({email: event.target.value});
  }
  handleSubmit = (event) => {
    event.preventDefault();
    ReactDOM.render(<Signup email={this.state.email}/>, document.getElementById('root'))
  }


  render() {

    return (
      <header className="header no@m">
        <div className="container logged-in-header">

          <ul id="primarymenu" className="nav menu">

            <li><Link to="/"><img className="logo" src={process.env.PUBLIC_URL + '/logo.svg'} alt="logo"/></Link></li>

            <li><Link to="/feed">Discover</Link></li>

            <li id="menuitem-categorias" className={ this.state.isHoveredCategorias ? "hoverstate" : "" } onMouseEnter={this.handleHoverCategorias} onMouseLeave={this.handleHoverCategorias}>
              <div>Feel like?</div>
              <svg viewBox="0 0 30 30" className="chevron"><polygon points="15,17.4 4.8,7 2,9.8 15,23 28,9.8 25.2,7 "></polygon></svg>
              <div id={'dropdown-categorias'} className="drop-overlay">
                <ul>
                  {this.state.categorias && this.state.categorias.map((categoria, key) =>
                    <li key={key}>
                      <Link to={`/categorias/${categoria}`}>{categoria}</Link>
                    </li>
                  )}
                </ul>
              </div>
            </li>

            <li id="menuitem-temas" className={ this.state.isHoveredTemas ? "hoverstate" : "" } onMouseEnter={this.handleHoverTemas} onMouseLeave={this.handleHoverTemas}>
              <div>Topics</div>
              <svg viewBox="0 0 30 30" className="chevron"><polygon points="15,17.4 4.8,7 2,9.8 15,23 28,9.8 25.2,7 "></polygon></svg>
              <div id={'dropdown-temas'} className="drop-overlay">
                <ul>
                  {this.state.temas && this.state.temas.map((tema, key) =>
                    <li key={key}>
                      <Link to={`/temas/${tema}`}>{tema}</Link>
                    </li>
                  )}
                </ul>
              </div>
            </li>
          </ul>

          <ul id="usermenu" className="nav menu">
            <li>
              <Link to="/create">Create</Link>
            </li>
            <li><Link to="/likes">Likes</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>

        </div>
      </header>
    );
  }
}

export default Header;
