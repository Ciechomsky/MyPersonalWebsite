import React from 'react';
import ReactDOM from 'react-dom';

export class HomePage extends React.Component {
    render() {
       return <div className='homePage'> 
                <HomeText />
                <HomeContactButton />
            </div>
    }
}

class HomeText extends React.Component {
    render() {
        return <div>
                <span className='interLine'>H</span><span className='interLine'>i</span><span className='interLine'>,</span>
                    <br />
                <span className='interLine'>I</span><span className='interLine'>'</span><span className='interLine'>m</span>
                 <span className='interLine'>M</span><span className='interLine'>a</span><span className='interLine'>x</span>
            </div>
    }
}

class HomeContactButton extends React.Component {
    render() {
        return <div className = 'contactButton'>
                contact
            </div>
    }
}