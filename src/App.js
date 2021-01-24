import React from 'react';
import TitleH1 from "./components/titres/TitleH1";
import Button from "./components/buttons/Button";


const ajoutLivre=()=>{
  console.log("ajouter un livre")
}
const supprimerLivre =()=> {
  console.log("Modifier un livre")
}
const modifierLivre =()=> {
  console.log("Supprimer un livre")
}

function App() {
  return (
    <div className="container">
      <TitleH1>Page listant les Livres</TitleH1>
      <div>Livres</div>
      <Button btnType="btn-success" click={ () => ajoutLivre()}>Ajouter</Button>
      <Button btnType="btn-warning" click={ () => modifierLivre()}>Modifier</Button>
      <Button btnType="btn-danger" click={ () => supprimerLivre()}>Supprimer</Button>
    </div>
  );
}

export default App;
