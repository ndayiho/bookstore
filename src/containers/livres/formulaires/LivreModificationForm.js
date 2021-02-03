import React, { Component } from 'react';
import Button from '../../../components/buttons/Button'

class LivreModificationForm extends Component {

    state = {
        titreSaisi: "",
        auteurSaisi: "",
        nombrePagesSaisi: ""
    }
    //une fois que le composant est charge, on initialise les valeur en state aux valeurs precedentes
    componentDidMount() {
        this.setState({
            titreSaisi: this.props.title,
            auteurSaisi: this.props.auteur,
            nombrePagesSaisi: this.props.nbrePages
        })
    }

    handlerValidModifLivre = () => {
        this.props.onModificationValidation(this.state.titreSaisi, this.state.auteurSaisi, this.state.nombrePagesSaisi);
    }

    render() {
        return (
            <>
                <td>
                    <input type="text" className="form-control" value={this.state.titreSaisi}
                        onChange={(event) => this.setState({ titreSaisi: event.target.value })} />
                </td>
                <td>
                    <input type="text" className="form-control" value={this.state.auteurSaisi}
                        onChange={(event) => this.setState({ auteurSaisi: event.target.value })} />
                </td>
                <td>
                    <input type="text" className="form-control" value={this.state.nombrePagesSaisi}
                        onChange={(event) => this.setState({ nombrePagesSaisi: event.target.value })} />
                </td>
                <td>
                    <Button btnType="btn-success" clic={this.handlerValidModifLivre} >Valider</Button>
                </td>
            </>
        );
    }
}

export default LivreModificationForm