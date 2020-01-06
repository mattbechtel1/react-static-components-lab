import React, { Component } from 'react';
import CatComponent from './CatComponent'
import EinsteinQuoteComponent from './EinsteinQuoteComponent'
import MoustComponenent from './MouseComponent'

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<EinsteinQuoteComponent />
				<MoustComponenent />
			</div>
		);
	}
}

export default App;
