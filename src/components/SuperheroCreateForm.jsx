import React, { Component } from 'react';
// import React from 'react';

class SuperheroCreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            createdSuperhero:''

         }
    }

    handleChange = (event) => {
        this.setState({
            createdSuperhero: event.target.value
        })
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addedHero(this.state.createdSuperhero)
       
        
    };

    render() { 
        return (
            <form onSubmit= {this.handleSubmit}>
                <label>ID</label>
                <input type= "text" name="id" onChange={this.handleChange} value = {this.state.superheroes} />
                <label>Name</label>
                <input type= "text" name="name" onChange={this.handleChange} value = {this.state.superheroes} />
                <label>Primary Ability</label>
                <input type= "text" name="primary" onChange={this.handleChange} value = {this.state.superheroes} />
                <label>Secondary Ability</label>
                <input type= "text" name="secondary" onChange={this.handleChange} value = {this.state.superheroes} />
                <button type="submit"> Add Superhero</button>
            </form>
          );
    }
}
 
export default SuperheroCreateForm;