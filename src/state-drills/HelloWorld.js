import React from 'react';
import './HelloWorld.css';

class HelloWorld extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            who : 'World'
        }
    }

    handleButtonClick = expression => {
        this.setState({
            who: expression
        })
    }

    render(){

        return(
            <div className="hello-world-component">
                <p>Hello {this.state.who}!</p>
                <button type="button" onClick={() => this.handleButtonClick('World')}>World</button>
                <button type="button" onClick={() => this.handleButtonClick('Friend')}>Friend</button>
                <button type="button" onClick={() => this.handleButtonClick('React')}>React</button>
            </div>
        );

    }
}

export default HelloWorld;