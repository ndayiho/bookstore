import React from 'react';

const button = (props) => {
    const buttonCSS = `btn ${props.btnType}`
    return <button className={buttonCSS} onClick={props.clic}>{props.children}</button>
}

export default button