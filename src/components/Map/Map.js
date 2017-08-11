import React, { Component } from 'react'
import './Map.scss'
import Hero from '../Hero/Hero.js'

class Map extends Component {
	render() {
		return (
			<div className='Map-container'>
				<p>Map</p>
				<Hero />
				<Hero />
			</div>
		)
	}
}

export default Map
