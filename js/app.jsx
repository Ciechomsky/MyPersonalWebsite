import React from 'react';
import ReactDOM from 'react-dom';

require('../scss/main.scss')

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});

class App extends React.Component {

    render() {
        return <div>
            Test
            </div>
    }
}