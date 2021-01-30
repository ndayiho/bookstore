import React, { Component } from 'react';
import TitleH1 from "./components/titres/TitleH1";
import Livres from "./containers/livres/Livres";
import Button from "./components/buttons/Button";

class App extends Component {

  state = {
    ajoute: false,

  }
//ATTENTION -->lors qu'on veut utiliser l'ancien valeur du state, il faut passer older state dans le parametre de setState
  ajoutLivreHandler = () => {
    this.setState((oldState, props) => {
      return { ajoute: !oldState.ajoute }
    })
  }
  render() {
    return (
      <div className="container">
        <TitleH1>Page listant les Livres</TitleH1>
        <Livres ajoute = {this.state.ajoute}></Livres>
        <Button btnType="btn-success w-100" click={this.ajoutLivreHandler}>{!this.state.ajoute ? "Ajouter" : "Fermer l'ajout"}</Button>
      </div>
    );
  }

}

export default App;
