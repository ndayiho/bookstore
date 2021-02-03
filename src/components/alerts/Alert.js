import React from 'react';

const Alert = (props) => {
    const classesNames=`alert ${props.alertClassNames}`;
    return (
        <div className={classesNames} role="alert">{props.children}</div>
    );

}

export default Alert