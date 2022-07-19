import React from 'react'

class Character extends React.Component {
	render() {
		return(
            <div className="characterInfo">
            <img className="img" src={this.props.image} alt="character"/>
            <h2>{this.props.name}</h2> 
            <h3>{this.props.title}</h3>
            </div>
		)
	}
}

export default Character