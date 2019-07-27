import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages';
import renderer from 'react-test-renderer';

describe('Messages Component', ()=>{

    it.skip('renders without crashing', ()=>{
        const div = document.createElement('div');
        ReactDOM.render(<Messages />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it.skip('renders the UI as expected', ()=>{
        const tree = renderer
            .create(<Messages name="Messages" unread={4} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it.skip('renders when there are no unread messages', () =>{
        const tree = renderer
            .create(<Messages name="Messages" unread={0} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    
});