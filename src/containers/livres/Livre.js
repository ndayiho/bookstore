import React from 'react';
import Button from "../../components/buttons/Button";

const livre = (props) => {

    return (
        <>
            <td>{props.title}</td>
            <td>{props.auteur}</td>
            <td>{props.nbrePages}</td>
            <td>
                <Button btnType="btn-warning" clic={props.update}>Modifier</Button>
            </td>
            <td>
                <Button btnType="btn-danger" clic={props.delete}>Supprimer</Button>
            </td>
        </>
    );

}

export default livre