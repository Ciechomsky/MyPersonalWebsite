import React from 'react';
import ReactDOM from 'react-dom';

export class HomePage extends React.Component {
    render() {
       return <div> <HomeText />
            </div>
    }
}

class HomeText extends React.Component {
    render() {
        return <div>
                <span>H</span><span>i</span><span>,</span>
                    <br />
                <span>I</span><span>'</span><span>m</span> <span>M</span><span>a</span><span>x</span>
            </div>
    }
}