import React, { Component } from "react";
import "./css/pure-min.css";
import "./css/side-menu.css";
import "./css/App.css"
import AutorBox from "./componentes/Autor"

class App extends Component {

  render() {
    return (
      <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">    
          <span></span>
        </a>

        <div id="menu">
          <div className="pure-menu">
            <a className="pure-menu-heading" >Menu</a>

            <ul className="pure-menu-list">
              <li className="pure-menu-item"><a className="pure-menu-link">Home</a></li>
              <li className="pure-menu-item"><a className="pure-menu-link">Autor</a></li>
              <li className="pure-menu-item"><a className="pure-menu-link">Livro</a></li>
              {/*<li className="pure-menu-item menu-item-divided pure-menu-selected">
                  <a href="#" className="pure-menu-link">Services</a>
                </li>*/}
            </ul>
          </div>
        </div>

        <div id="main">
          <div className="header">
            <h1>Cadastro de livros</h1>
            <h2>Livros e seus autores</h2>
          </div>

          <div className="content">
            <AutorBox />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
