import React, { Component } from 'react';
import Livre from "./Livre.js";
import LivreForm from "../livres/formulaires/LivreForm"
import LivreModificationForm from "./formulaires/LivreModificationForm.js"

class Livres extends Component {

    state = {
        livres: [
            {
                id: 1,
                title: "Algo",
                auteur: "Honore1",
                nbrePages: 200,
            },
            {
                id: 2,
                title: "Algo2",
                auteur: "Honore2",
                nbrePages: 300,
            },
            {
                id: 3,
                title: "Algo3",
                auteur: "Honore3",
                nbrePages: 400,
            },
            {
                id: 4,
                title: "Algo4",
                auteur: "Honore4",
                nbrePages: 500,
            },

        ],
        lastLivreId: 4,
        idLivreAMofifier: 0
    }


    supprimerLivreHandler = (livreId) => {
        console.log(`Supprimer le livre ${livreId}`);
        //cherche l' index du livre à supprimer
        const indexLivre = this.state.livres.findIndex(livre => {
            return livre.id === livreId;
        })
        // faire un copy de nos livres // on peut utilise la fonction slice
        const newLivresList = [...this.state.livres];
        // Enlever le livre d'indice id de notre tab copié
        newLivresList.splice(indexLivre, 1)
        // Mette à jour notre livres dans le state
        this.setState({
            livres: newLivresList
        })
    }


    handlerOnValidationModificationLivre = (titre, auteur, nbrePages) => {
        console.log(`Modifier le livre ${this.state.idLivreAMofifier}`);
        //cherche l' index du livre à Modifier
        const indexLivre = this.state.livres.findIndex(livre => {
            return livre.id === this.state.idLivreAMofifier;
        })
        // faire un copy de nos livres // on peut utilise la fonction slice
        const newLivresList = [...this.state.livres];
        /* soit, je peux changer les valeurs du livre ou creer un nouveau livre*/ 
        newLivresList[indexLivre].title = titre;
        newLivresList[indexLivre].auteur = auteur;
        newLivresList[indexLivre].nbrePages = nbrePages;

        // Mette à jour nos livreset le idLivreAMofifier à 0 dans le state
        this.setState({
            livres: newLivresList,
            idLivreAMofifier: 0
        })
    }

    handlerValidationForm = (title, auteur, nbrePages) => {
        const idLivre = this.state.lastLivreId + 1;
        console.log(`Ajouter le livre ${title} et d'id ${idLivre}`);
        // faire un copy de nos livres // on peut utilise la fonction slice
        const newLivresList = [...this.state.livres];
        // creer le livre
        const newLivre = { id: idLivre, title: title, auteur: auteur, nbrePages: nbrePages };
        //ajoute le livre à notre list des livres
        newLivresList.push(newLivre);
        // Mette à jour notre livres dans le state
        this.setState((oldState) => ({
            livres: newLivresList,
            lastLivreId: oldState.lastLivreId + 1
        }));
        //Fermer le formulaire
        this.props.fermerLivreForm();
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
                        {
                            this.state.livres.map(livre => {
                                if (this.state.idLivreAMofifier !== livre.id) {
                                    return (
                                        <tr key={livre.id}>
                                            <Livre {...livre}
                                                delete={() => this.supprimerLivreHandler(livre.id)}
                                                update={() => this.setState({ idLivreAMofifier: livre.id })}>
                                            </Livre>
                                        </tr>
                                    )
                                } else {
                                    return (
                                        <tr key={livre.id}>
                                            <LivreModificationForm {...livre}
                                                onModificationValidation={this.handlerOnValidationModificationLivre}>
                                            </LivreModificationForm>
                                        </tr>
                                    )
                                }

                            })
                        }
                    </tbody>
                </table>
                { this.props.ajoute && <LivreForm validation={this.handlerValidationForm} />}
            </>
        );
    }
}
export default Livres