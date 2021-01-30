import React, { Component } from 'react';
import classes from './LivreForm.module.css';

class LivreForm extends Component {
    render() {
        const stylesClasses = `${classes.formTitle} w-100 text-center text-primary`;
        return (
            <>
                <h2 className={stylesClasses}>Affichage du formulaire d'ajout</h2>
            </>
        );
    }
}

export default LivreForm