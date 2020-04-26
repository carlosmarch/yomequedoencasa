import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

class Confetti extends React.Component {

  constructor() {
     super();
   }



  componentDidMount(){

    const create = (i) => {
      console.log('create')
      var width = Math.random() * 8;
      var height = width * 0.4;
      var colourIdx = Math.ceil(Math.random() * 3);
      var colour = "confetti-red";
      switch(colourIdx) {
        case 1:
          colour = "confetti-yellow";
          break;
        case 2:
          colour = "confetti-blue";
          break;
        default:
          colour = "confetti-red";
      }
      $('<div class="confetti-'+i+' '+colour+'"></div>').css({
        "width" : width+"px",
        "height" : height+"px",
        "top" : -Math.random()*20+"%",
        "left" : Math.random()*100+"%",
        "opacity" : Math.random()+0.5,
        "transform" : "rotate("+Math.random()*360+"deg)"
      }).appendTo('.wrapper-confetti');

      drop(i);
    }

    const drop = (x) => {
      $('.confetti-'+x).animate({
        top: "100%",
        left: "+="+Math.random()*15+"%"
      }, Math.random()*3000 + 3000, function() {
        reset(x);
      });
    }

    const reset = (x) => {
      $('.confetti-'+x).animate({
        "top" : -Math.random()*20+"%",
        "left" : "-="+Math.random()*15+"%"
      }, 0, function() {
        drop(x);
      });
    }

    for (var i = 0; i < 200; i++) {
       create(i);
    }

  }


  render() {
     return (
       <div className="wrapper-confetti"></div>
     );
  }
}
export default Confetti;