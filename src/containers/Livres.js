import React, { Component } from 'react';
import Button from "../components/buttons/Button";

class Livres extends Component {

    supprimerLivre = () => {
        console.log("Modifier un livre")
    }
    modifierLivre = () => {
        console.log("Supprimer un livre")
    }

    render() {
        return (
            <>
                <table className="table text-center">
                    <thead>
                        <tr className="table-dark">
                            <th>Titre</th>
                            <th>Auteur</th>
                            <th>Nombres de pages</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Titre1</td>
                            <td>Auteur1</td>
                            <td>X pages</td>
                            <td>
                                <Button btnType="btn-warning" click={() => this.modifierLivre()}>Modifier</Button>
                            </td>
                            <td>
                                <Button btnType="btn-danger" click={() => this.supprimerLivre()}>Supprimer</Button>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </>
        );
    }
}
export default Livres