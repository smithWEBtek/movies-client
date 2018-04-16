import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Genres from '../src/Genres/Genres'

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to Netflix Genres API</h1>
				</header>
				<Genres />
			</div>
		);
	}
}

export default App;
