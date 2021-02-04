import React, { Component } from 'react';
import classes from './LivreForm.module.css';
import Button from '../../../components/buttons/Button';
import { withFormik } from 'formik';

class LivreForm extends Component {

    render() {
        const stylesClasses = `${classes.formTitle} w-100 text-center text-primary`;
        return (
            <>
                <h2 className={stylesClasses}>Affichage du formulaire d'ajout</h2>

                <form>
                    <div className="form-group">
                        <label htmlFor="titre">Titre du livre </label>
                        <input type="text"
                            className="form-control"
                            id="titre"
                            name="titre"
                            value={this.props.values.titre}
                            onChange={this.props.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="auteur">Auteur du livre </label>
                        <input type="text"
                            className="form-control"
                            id="auteur"
                            name="auteur"
                            value={this.props.values.auteur}
                            onChange={this.props.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="NombresPages">Nombres de pages du livre </label>
                        <input type="text"
                            className="form-control"
                            name="nbPages"
                            value={this.props.values.nbPages}
                            id="NombresPages" onChange={this.props.handleChange}
                        />
                    </div>
                    <Button btnType="btn-primary" clic={this.props.handleSubmit}>Valider</Button>
                </form>
            </>
        );
    }
}
//withFormik est appelle avant le formulare LivreForm, donc il lui transmet les props a utiliser
export default withFormik({
    mapPropsToValues: () => ({
        titre: '',
        auteur: '',
        nbPages: ''
    }),

    validate: values => {

    },

    handleSubmit: (values, { props }) => {
        props.validation(values.titre, values.auteur, values.nbPages);
    }

})(LivreForm);