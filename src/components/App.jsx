import axios from 'axios';
import React, { Component } from 'react';
import AlertUser from './AlertUser';
// import './App.css'
import DisplayName from './DisplayName';
import NameList from './NameList';
import Superhero from './Superhero';
import SuperheroCreateForm from './SuperheroCreateForm'
// import DisplayJokes from './DisplayJokes';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
            jokes: [],
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
                },
            
            ]

        };

    }
    
    popUp = ()=> {
        alert('devcodecamp')
    }

    addedHero = (heroToAdd) => {
        let tempHero= this.state.superheroes;
        tempHero.push(heroToAdd);
        this.setState({
            superheroes: tempHero
        });
    }

    displayJokes = ()=> {
        console.log('Jokes here')
    }

    componentDidMount(){
        this.displayJokes();
    }
    
    async displayJokes(){
        try{
        let response = await axios.get('https://v2.jokeapi.dev/joke/Programming?type=twopart&amount=5')
        
        console.log(response.data)
        }
        catch(ex){

            console.log('Error')
        }
        // this.setState({
        //     jokes:response.data
        // });
    }

    render(){
        return(
            <div>
                <DisplayName firstName={this.state.firstName} lastName= {this.state.lastName} />
                <NameList names= {this.state.names} />
                <AlertUser popUp= {this.popUp} />
                <Superhero heroes= {this.state.superheroes}/>
                <SuperheroCreateForm addedHero={this.addedHero}/>
                <h1>{this.state.jokes}</h1>

            </div>
        )
    }
}

export default App

