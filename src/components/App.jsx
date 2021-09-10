import React, { Component } from 'react';
import AlertUser from './AlertUser';
// import './App.css'
import DisplayName from './DisplayName';
import NameList from './NameList';
import Superhero from './Superhero';

// Display name


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
            superheroes: [
                {
                    superheroId: 1,
                    name: 'Batman',
                    primaryAbility: 'Wealthy',
                    secondarAbility: 'Rich'
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super strength',
                    secondarAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondarAbility: 'Shoots web'
                }
            ]

        };

    }
    
    popUp(){
        alert('devcode')
    }

    render(){
        return(
            <div>
                <DisplayName firstName={this.state.firstName} lastName= {this.state.lastName} />
                <NameList names= {this.state.names} />
                <AlertUser popUp= {this.popUp} />
                <Superhero superheroes= {this.state.superheroes} />
            </div>
        )
    }
}

export default App

