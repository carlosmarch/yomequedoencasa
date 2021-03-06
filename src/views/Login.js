import React, { Component } from "react";
import { Link } from 'react-router-dom';
import history from '../history';
import Message from '../components/Message';

const userController = require('../controllers/userController');

class Login extends Component {


  constructor() {
    super();
    this.state = {
      isLoading: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  emailChangeHandler = (event) => {
    this.setState({email: event.target.value});
    this.setState({isLoading: false});
  }
  passwordChangeHandler = (event) => {
    this.setState({password: event.target.value});
    this.setState({isLoading: false});
  }

  handleSubmit(event) {
    event.preventDefault();
    //AUTH
    userController.authenticate(this.state)
    this.setState({isLoading: true});
  }

  componentDidMount(){
    //Clear history state messages
    if (history.location.state && history.location.state.message) {
        let state = { ...history.location.state };
        delete state.message
        delete state.type
        history.replace({ ...history.location, state });
    }
    this.setState({isLoading: false});
  }

  componentWillReceiveProps(nextProps) {
    this.setState({isLoading: false});
  }

  render() {
    return (
      <div className="app_wrapper login_view">
          <div className="grid">

                  <div className="grid__item width-3/12 width-12/12@m left-pane no@m">
                    <div className="left-pane-quote">
                      <div className="left-pane-quote-text">
                        I can get inspiration & cultural references from people around the world.
                      </div>
                      <div className="contributor mb-m">
                        <div className="user-badge" style={{backgroundImage: `url(https://res.cloudinary.com/dsgddhtwh/image/upload/v1588500756/okghqwp6r7mc9zrdxp0r.png)`}}></div>
                        <div className="contributor-info">
                          <Link to={`/profile/Editor%20Picks`} className="contributor-name underline-hover white">Editor Picks</Link>
                          <div className="contributor-description white">Favbox Staff</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid__item width-9/12 width-12/12@m right-pane">
                    <div className="right-pane-content">
                      <div className="container">
                              <div className="form-container">
                                <div className="right-pane-text mb-s">
                                  <Link to="/"><img className="logo mb-m" src={process.env.PUBLIC_URL + '/logo.svg'} alt="logo"/></Link>
                                  <h5 className="big-title alt-font">Welcome back.</h5>
                                  <p>Enter your details below.</p>
                                </div>

                                {this.props.location.state?.message ?
                                  <Message type={this.props.location.state.type} message={this.props.location.state.message}/>
                                  : ''}

                                <form onSubmit={this.handleSubmit} className="login-form">
                                  <div>
                                    <label>Email</label>
                                    <input
                                      name="email"
                                      component="input"
                                      type="email"
                                      autoComplete="email"
                                      onChange={this.emailChangeHandler}
                                      placeholder="dieter@rams.com"
                                      required
                                    />
                                  </div>
                                  <div>
                                    <label>Password</label>
                                    <input
                                      name="password"
                                      component="input"
                                      type="password"
                                      autoComplete="current-password"
                                      onChange={this.passwordChangeHandler}
                                      placeholder="Introduce your password"
                                      pattern=".{8,}"
                                      required
                                    />
                                  </div>

                                  <button className="button submitbtn inline" type="submit">{this.state.isLoading ? 'loading' : 'Login'}</button>
                                </form>
                                <span>Don’t have an account? <Link to="/signup" className="link">Get started!</Link></span>
                              </div>
                      </div>
                    </div>
                  </div>

          </div>
      </div>
    );
  }
}

export default Login;
