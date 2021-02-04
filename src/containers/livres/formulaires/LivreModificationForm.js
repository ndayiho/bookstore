import React, { Component } from 'react';
import Button from '../../../components/buttons/Button';
import { withFormik } from 'formik';

class LivreModificationForm extends Component {

    render() {
        return (
            <>
                <td>
                    <input type="text" className="form-control"
                        name="titre"
                        value={this.props.values.titre}
                        onChange={this.props.handleChange}
                        onBlur={this.props.handleBlur} />
                </td>
                <td>
                    <input type="text" className="form-control"
                        name="auteur"
                        value={this.props.values.auteur}
                        onChange={this.props.handleChange}
                        onBlur={this.props.handleBlur} />
                </td>
                <td>
                    <input type="number" className="form-control"
                        name="nbPages"
                        value={this.props.values.nbPages}
                        onChange={this.props.handleChange}
                        onBlur={this.props.handleBlur} />
                </td>
                <td>
                    <Button btnType="btn-success" clic={this.props.handleSubmit} >Valider</Button>
                </td>
            </>
        );
    }
}

export default withFormik({
    mapPropsToValues: (props) => ({
        titre: props.title,
        auteur: props.auteur,
        nbPages: props.nbrePages
    }),

    validation: values => {


    },

    handleSubmit: (values, { props }) => {
        props.onModificationValidation(values.titre, values.auteur, values.nbPages)
    }

})(LivreModificationForm);