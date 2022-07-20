import React from 'react'
// import { Component } from 'react/cjs/react.production.min'
import Character from './components/Character';
import './App.css';
import Continent from './components/Continent';

class App extends React.Component {
constructor() {
  super()

  this.state = {
    characters: [],
    favorites: [],
    continents: [],
    display: "characters",
  }
}

async componentDidMount() {
  const request = await fetch("https://thronesapi.com/api/v2/Characters");
  const requestBis = await (await fetch("https://thronesapi.com/api/v2/Continents")).json();
  const response = await request.json();
  console.log(response)
  this.setState({characters: response})
  this.setState({continents: requestBis})
}
handleFavoriteClick = character => {
  const clonedFavorites = [...this.state.favorites, character]
  console.log(clonedFavorites)
  this.setState({
    favorites: clonedFavorites
  })
}
handleCharactersClick = () => {
  this.setState({display: "characters"})
}
handleContinentsClick = () => {
  this.setState({display: "continents"})
}

	render() {
    console.log(this.state) 
		return(
      <section className="thrones">
			  <h1>Game of thrones</h1>
        <div className="buttons">
          <button className="onglet" onClick={this.handleCharactersClick}>Personnages</button>
          <button className="onglet" onClick={this.handleContinentsClick}>Continents</button>
        </div>
      {this.state.display === "characters" ?
        <div className="characterCard">
          {this.state.characters.map((character) => {    
          return ( 
          <Character
            image={character.imageUrl}
            name={character.fullName}
            title={character.title}
            handleFavoriteClick={() => this.handleFavoriteClick(character)}
          />
          )})}
        </div>
      :
        <div className="continentCard">
          {this.state.continents.map((continent) => {
          return (
          <Continent
            name={continent.name}
          />
          )})}
        </div>
      }
      </section>        
		)
	} 

}
export default App;