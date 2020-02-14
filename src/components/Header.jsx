import React, { Component } from 'react';
import './Header.css';
import Dropdown from './Dropdown';
import SearchField from './SearchField';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { arr: [] };
  }

  render() {
    function mouseOver(e) {
      e.preventDefault();
      let menuItem = e.target.firstChild.nodeValue,
          ddElement = document.querySelector('.dropdown'),
          style = ddElement.style,
          navbar = document.querySelector('.navbar');

      switch(menuItem) {
        case 'ДАР БОРАИ МО': 
          this.setState({ // тут будет запрос в бэк и возвращаемый массив будет в место нижнего массива
            arr: ['Редакцияхо', 'Дастоварду чоизахо']
          });

          style.left = `${getCoords(e.target).left - getCoords(navbar).left - 25}px`;
          style.width = '195px';
          ddElement.classList.add('show');
          
        break;

        case 'КИТОБХО': 
          this.setState({ // тут будет запрос в бэк и возвращаемый массив будет в место нижнего массива
            arr: ['Донишномахо', 'Силсилаи осори таърихи']
          });
          
          style.left = `${getCoords(e.target).left - getCoords(navbar).left - 27}px`;
          style.width = '145px';
          ddElement.classList.add('show');
        break;

        case 'АСОСИ': 
        case 'НАВИД': 
        case 'ТАМОС': 
          mouseLeave();

      }

    }

    function mouseLeave() {
      let ddElement = document.querySelector('.dropdown');
      ddElement.classList.remove('show');
    }

    function getCoords(elem) {
      let box = elem.getBoundingClientRect();
    
      return {
        left: Math.round(box.left + window.pageXOffset)
      };
    }

    return (
      <div>
        <SearchField />
        <header>
          <div className="logo"> <img src="./../logo-3D.png" alt="logo"/> </div>
          <nav className="navbar" onMouseOver={mouseOver.bind(this)}>
            <div className="nav-div"><a href="/main">АСОСИ</a></div>
            <div className="nav-div"><a href="/about-us">ДАР БОРАИ МО</a></div>
            <div className="nav-div"><a href="/news">НАВИД</a></div>
            <div className="nav-div"><a href="/books">КИТОБХО</a></div>
            <div className="nav-div"><a href="/more-info">ТАМОС</a></div>
            <Dropdown items={this.state.arr} mouseLeave={mouseLeave}/>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;