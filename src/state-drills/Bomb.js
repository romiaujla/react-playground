import React from 'react';
import './Bomb.css';

class Bomb extends React.Component {

    static defaultProps ={
        boomTiming: 8
    }

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            text: `tick`
        }
    }

    // Starts Updating the component every second
    componentDidMount(){
        // console.log(`component mounted with count: `, this.state.count);
        this.interval = setInterval(() => {
            
            this.setState({
                count: this.state.count+1
            });
            
            const count = this.state.count;
            if(count%2 === 1){
                this.setState({
                    text: `tock`
                });
            }else{
                this.setState({
                    text: `tick`
                });
            }
            
            // uses the prop on when to BOOM
            if(count >= this.props.boomTiming){
                this.setState({
                    text: `BOOM!`
                });
                clearInterval(this.interval);
            }

            // console.log(this.state.count, this.state.text);
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        return (
            <div className='tick-tock'>
                <p>{this.state.text}</p>
            </div>
        );  
    }

}

export default Bomb;