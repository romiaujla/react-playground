import React from 'react';
import './Tabs.css';

class Tabs extends React.Component {

    static defaultProps = {
        tabs: []
    };

    constructor(props){
        super(props);
        this.state = {
            currentTabIndex: 0
        };
    }

    handleButtonClick = (index) => {
        this.setState({
            currentTabIndex: index
        })
    }

    renderButtons(){
        return this.props.tabs.map((tab, index) => (
                <button key={index} onClick={() => this.handleButtonClick(index)}>
                    <div>{tab.name}</div>
                </button>
        ));
    }

    renderContent(){
        const currentTab = this.props.tabs[this.state.currentTabIndex];
        return (
            <div className='content'>
                {currentTab.content}
            </div>
        );
    }

    render(){
        return(
            <div className='tabs-component'>
                {this.renderButtons()}
                {!!this.props.tabs.length && this.renderContent()}
            </div>
        );
    }
}

export default Tabs;