import React from 'react';

const button = (props) => {
    const buttonCSS = `btn ${props.btnType}`
    return <button className={buttonCSS} onClick={props.click}>{props.children}</button>
}

export default button