import React from 'react';
import ReactDOM from 'react-dom';
import {HomeNavButton, AboutMeNavButton, SkillsNavButton, ContactNavButton} from './navButtons.jsx'

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
            < Menu />
            Test
            </div>
    }
}

// Menu

class Menu extends React.Component {

    render() {
        return <div class="menu">
            <MiniLogo />
            <NavButtons />
            </div>
    }
}

// Logo in Menu
class MiniLogo extends React.Component {
    render() {
        return <div>
            OBRAZEK
            </div>
    }
}

// Nav Buttons
class NavButtons extends React.Component {
    render() {
        return <div class="navButtons">
                <HomeNavButton />
                <AboutMeNavButton />
                <SkillsNavButton />
                <ContactNavButton />
            </div>
    }
}

// Social buttons
class SocialButtons extends React.Component {
    render() {
        return <div class="socialButtons">
            </div>
    }
}