import React from 'react'
// import { Component } from 'react/cjs/react.production.min'
import Character from './components/Character';
import './App.css';

class App extends React.Component {
constructor() {
  super()

  this.state = {
    characters: []
  }
}

async componentDidMount() {
  const request = await fetch("https://thronesapi.com/api/v2/Characters");
  const response = await request.json();
  console.log(response)
  this.setState({characters: response})
}


	render() {
    console.log(this.state)  
		return(

      <section className="thrones">
			  <h1>Game of thrones</h1>
        <article className="characterCard">
        {this.state.characters.map((character) => {    
        return ( 
        <Character
        image={character.imageUrl}
        name={character.fullName}
        title={character.title}
        />
        )})}
        </article>
      </section>        

		)
	} 

}
export default App
