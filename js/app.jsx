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

window.addEventListener('resize', function(){
    var navButtons = document.getElementsByClassName('navButtons');

    if(window.innerWidth > 500) {                
        navButtons[0].style.visibility = 'visible'
    } else {
        navButtons[0].style.visibility = 'hidden'
    }
});

class App extends React.Component {

    render() {
        return <div>
            < Menu />
            </div>
    }
}

// Menu

class Menu extends React.Component {

    render() {
        return <div className="menu">            
            <MiniLogo />
            <MenuButton />
            <NavButtons />            
            </div>
    }
}

// Logo in Menu
class MiniLogo extends React.Component {
    render() {
        return <div className="minLogo">
            OBRAZEK
            </div>
    }
}

//Menu button
class MenuButton extends React.Component {
    showNavButtons = () => {
            var navButtons = document.getElementsByClassName('navButtons');

            if(navButtons[0].style.visibility == 'visible') {
                navButtons[0].style.visibility = 'hidden';
            } else {
                navButtons[0].style.visibility = 'visible';
            }
    }

    render() {
        return <div className="menuButton" onClick ={this.showNavButtons}>
                    <div className="singleBelt" />
                    <div className="singleBelt" />
                    <div className="singleBelt" />
            </div>
    }
}

// Nav Buttons
class NavButtons extends React.Component {
    render() {
        return <div className="navButtons">
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
        return <div className="socialButtons">
            </div>
    }
}