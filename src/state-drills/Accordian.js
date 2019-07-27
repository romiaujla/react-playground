import React from 'react';
import './Accordian.css';

class Accordian extends React.Component {

    static defaultProps = {
        sections: [
            {
                title: '',
                content: ''
            }
        ]
    }

    constructor(props){
        super(props);
        this.state = {
            currentAccordian: null
        }
    }

    // Handling the button click for changing the state of current accordian
    handleButtonClick = (index) => {
        this.setState({
            currentAccordian: index
        })
    }

    // renders the buttons
    renderButtons = (section, index) => {
        return (
            <button type='button' onClick={() => this.handleButtonClick(index)} >
                {section.title}
            </button>
        );
    }

    // Rendering the Accordian List
    renderAccordianList = () => {
        return this.props.sections.map((section, index) => (
            <li key={index} className='accordian-item'>
                {!!(section.title !== '') && this.renderButtons(section, index)}
                {!!(this.state.currentAccordian === index) && (<p>{section.content}</p>)}
            </li>
        ));
    }


    // Main render method
    render(){

        return (
            <ul className='accordian-component'>
                {this.renderAccordianList()}
            </ul>
        );
    }
}

export default Accordian;