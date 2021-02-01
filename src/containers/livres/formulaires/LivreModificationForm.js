import React, { Component } from 'react';
import Button from '../../../components/buttons/Button'

class LivreModificationForm extends Component {

    state = {
        titreSaisi: "",
        auteurSaisi: "",
        nombrePagesSaisi: ""
    }

    handlerValidModifLivre =() =>{
        this.props.onModificationValidation(this.state.titreSaisi,this.state.auteurSaisi,this.state.nombrePagesSaisi);
        console.log(`${this.state.titreSaisi},${this.state.auteurSaisi},${this.state.nombrePagesSaisi}`)
    }

    render() {
        return (
            <>
                <td>
                <input type="text" className="form-control" value={this.props.title} 
                onChange={(event) => this.setState({ titreSaisi: event.target.value })}/>
                </td>
                <td>
                <input type="text" className="form-control" value={this.props.auteur} 
                    onChange={(event) => this.setState({ auteurSaisi: event.target.value })}/>
                </td>
                <td>
                <input type="text" className="form-control" value={this.props.nbrePages} 
                onChange={(event) => this.setState({ nombrePagesSaisi: event.target.value })} />
                </td>
                <td>
                    <Button btnType="btn-success"clic={this.handlerValidModifLivre} >Valider</Button>
                </td>
            </>
        );
    }
}

export default LivreModificationForm