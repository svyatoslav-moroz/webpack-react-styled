import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import GlobalStyles from './globalStyles';

const Root = () => {

    return (
        <React.Fragment>
            <GlobalStyles/>
            <App />
        </React.Fragment>
    )
}



ReactDom.render(<Root />, document.querySelector('#root'));
