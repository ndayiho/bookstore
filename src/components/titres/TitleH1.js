import React from 'react';
import styles from './Titre.module.css';


const titleH1 = (props) => {
    const mesClasses = `${styles.policeTitre} border border-dark bg-primary p-2 m-2 rounded text-center text-white`;
    return (
        <h1 className={mesClasses} >{props.children}</h1>
    );
}


export default titleH1