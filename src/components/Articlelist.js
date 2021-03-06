import React, { Component } from "react";
import Like from './Like';
import Contributor from './Contributor';

class Articlelist extends Component {

  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    if (isMobile) {
      return (
        <a className="articlelist" href={this.props.url} target="_blank" rel="noopener noreferrer">
          <div className="articlelist-title">
            <div className="articlelist-category badge inline">{this.props.categories}</div>
            <h5>{this.props.title}</h5>
          </div>
          <div className="articlelist-description">
            <p>{this.props.description}</p>
            <Contributor contributor={this.props.autor[0]?.fields}/>
          </div>
          <Like itemId={this.props.itemId}/>
        </a>
      );
    } else {
      return (
        <a className="articlelist" href={this.props.url} target="_blank" rel="noopener noreferrer">
          <div className="articlelist-title">
            <h5>{this.props.title}</h5>
            <Contributor contributor={this.props.autor[0]?.fields}/>
          </div>
          <div className="articlelist-description">
            <div className="articlelist-category badge inline">{this.props.categories}</div>
            <p>{this.props.description}</p>
          </div>
          <Like itemId={this.props.itemId}/>
        </a>
      );
    }
  }
}

export default Articlelist;
