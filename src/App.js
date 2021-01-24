import React from 'react';
import TitleH1 from "./components/titres/TitleH1";
import Livres from "./containers/livres/Livres";
import Button from "./components/buttons/Button";

function App() {
  const ajoutLivre = () => {
    console.log("ajouter un livre")
  }
  return (
    <div className="container">
      <TitleH1>Page listant les Livres</TitleH1>
      <Livres></Livres>
      <Button btnType="btn-success w-100" click={() => ajoutLivre()}>Ajouter</Button>
    </div>
  );
}

export default App;
