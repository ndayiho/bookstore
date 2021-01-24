import React from 'react';
import Button from "../../components/buttons/Button";

const livre = (props) => {

   const  supprimerLivre = () => {
        console.log("Supprimer un livre")
    }
    const modifierLivre = () => {
        console.log("Modifier un livre")
    }

    return (
        <>
            <td>{props.title}</td>
            <td>{props.auteur}</td>
            <td>{props.nbrePages}</td>
            <td>
                <Button btnType="btn-warning" click={() => modifierLivre()}>Modifier</Button>
            </td>
            <td>
                <Button btnType="btn-danger" click={() => supprimerLivre()}>Supprimer</Button>
            </td>
        </>
    );

}

export default livre