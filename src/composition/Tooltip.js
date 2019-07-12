import React from 'react';

function Tooltip(props){
    return (
        <span className="Tooltip">
            <span className="Tooltip-content">
                {props.children}
            </span>
            <span className="Tooltip-message">
                {props.message}
            </span>
        </span>
    );
}

export default Tooltip;