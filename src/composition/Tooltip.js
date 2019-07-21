import React from 'react';
import './Tooltip.css';

// function Tooltip(props){
//     console.log(props.color);
    
// }

class TooltipClass extends React.Component{
    static defaultProps ={
        color: '#01a800'
    };

    render(){
        console.log('Using a class component');
        console.log(this.props);

        return (
            <span className="Tooltip">
                <span 
                    className="Tooltip-content"
                    style={{color: this.props.color}}
                >
                    {this.props.children}
                </span>
                <span className="Tooltip-message">
                    {this.props.message}
                </span>
            </span>
        );
    }
}

export default TooltipClass;