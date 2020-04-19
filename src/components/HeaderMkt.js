import React, { Component } from "react";
import ReactDOM from 'react-dom';
import history from '../history';
import { Link } from 'react-router-dom';

import Signup from '../views/Signup';

class HeaderMkt extends Component {

  constructor(){
      super();
      this.state = {
          email:''
      };
  }

  emailChangeHandler = (event) => {
    this.setState({email: event.target.value});
  }
  handleSubmit = (event) => {
    event.preventDefault();
    ReactDOM.render(<Signup email={this.state.email}/>, document.getElementById('root'))
    //@TODO Implement and refactor history
    history.push({
      pathname: '/signup'
    })
  }


  render() {

    return (
      <header className="header no@m">
        <div className="container">

          <ul id="primarymenu" className="nav menu">
            <li><Link to="/"><img className="logo" src={process.env.PUBLIC_URL + '/logo.svg'} alt="logo"/></Link></li>
            <li><Link to="/feed">Discover</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Sign in</Link></li>
          </ul>

          <div className="form no@m">
            <form className="email-form" onSubmit={this.handleSubmit}>
              <div className="email-form__input-wrapper">
                <input
                  type="email"
                  id="email"
                  className="email-form__input"
                  aria-required="true"
                  aria-invalid="false"
                  aria-describedby="signup-cta-error"
                  placeholder="Email"
                  autoComplete="email"
                  onChange={this.emailChangeHandler}
                  />
              </div>
              <button type="submit" className="email-form__submit" mailto="">
                <span className="email-form__submit__label">Get started!</span>
              </button>
            </form>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderMkt;
