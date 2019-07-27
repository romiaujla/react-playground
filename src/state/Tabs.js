import React from 'react';
import './Tabs.css';

class Tabs extends React.Component {

    static defaultProps = {
        tabs: [
            {
                name: '',
                content: ''
            }
        ]
    };

    render(){

        const buttons = this.props.tabs.map((tab, index) => (
            <button key={index}>
                <div>{tab.name}</div>
            </button>
        ));

        const currentTab = this.props.tabs[0];
        
        return(
            <div className='tabs-component'>
                {buttons}
                {this.props.tabs.length && (
                    <div className='content'>
                        {currentTab.content}
                    </div>
                )}
            </div>
        );
    }
}

export default Tabs;