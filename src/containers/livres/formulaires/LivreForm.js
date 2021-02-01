import React, { Component } from 'react';
import classes from './LivreForm.module.css';
import Button from '../../../components/buttons/Button'

class LivreForm extends Component {
    state = {
        titreSaisi: "",
        auteurSaisi: "",
        nombrePagesSaisi: ""
    }

    handlerAjoutLivre =(event) =>{
        event.preventDefault();
        this.props.validation(this.state.titreSaisi,this.state.auteurSaisi,this.state.nombrePagesSaisi);
        /** initialise le formulaire */
        this.setState( {
            titreSaisi: "",
            auteurSaisi: "",
            nombrePagesSaisi: ""
        });
    }

    render() {
        const stylesClasses = `${classes.formTitle} w-100 text-center text-primary`;
        return (
            <>
                <h2 className={stylesClasses}>Affichage du formulaire d'ajout</h2>

                <form>
                    <div className="form-group">
                        <label htmlFor="titre">Titre du livre </label>
                        <input type="text" className="form-control" id="titre" onChange={(event) => this.setState({ titreSaisi: event.target.value })} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="auteur">Auteur du livre </label>
                        <input type="text" className="form-control" id="auteur" onChange={(event) => this.setState({ auteurSaisi: event.target.value })} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="NombresPages">Nombres de pages du livre </label>
                        <input type="text" className="form-control" id="NombresPages" onChange={(event) => this.setState({ nombrePagesSaisi: event.target.value })} />
                    </div>
                    <Button btnType="btn-primary" clic={this.handlerAjoutLivre}>Valider</Button>
                </form>
            </>
        );
    }
}

export default LivreForm;