import React from 'react'

class Continent extends React.Component {
	render() {
		return(
            <div className="continentsInfo">
            <h2>{this.props.name}</h2> 
            </div>
		)
	}
}

export default Continent