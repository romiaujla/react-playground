import React from 'react';
import './RouletteGun.css';

class RouletteGun extends React.Component {

    // default props
    static defaultProps = {
        bulletInChamber: 8
    }

    constructor(props){
        super(props);
        this.state ={
            chamber: null,
            spinningTheChamber: false
        }
    }

    // button click handler
    handleButtonClick = () => {

        this.setState({
            spinningTheChamber: true
        });

        this.timeout = setTimeout(() => {
            const randomNumber = Math.ceil(Math.random() * this.props.bulletInChamber);
            this.setState({
                chamber: randomNumber,
                spinningTheChamber: false
            })
            console.log(`chamber: `, this.state.chamber);
        }, 2000);
    }

    
    // function that changes the current text in the p tag
    currentStatus = () => {
        const state = this.state
        console.log(state.spinningTheChamber);
        if(state.spinningTheChamber){
            return `spinning the chamber and pulling the trigger! ...`;
        }else{
            if(state.chamber === this.props.bulletInChamber && state.chamber !== null){
                return `BANG!!!`;
            }
            if(state.chamber !== null){
                return `You're Safe`;
            }
        }
    }

    componentWillUnmount(){
        clearTimeout(this.timeout);
    }

    // render method
    render(){
        return (
            <div className="roullete-gun-component">
                <button type="button" onClick={() => this.handleButtonClick()}>Pull the trigger!</button>
                <p>{this.currentStatus()}</p>
            </div>
        );
    }
}

export default RouletteGun;