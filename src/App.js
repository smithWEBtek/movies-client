import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Genres from '../src/Genres/Genres'

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to Netflix Genres API</h1>
					<p>Click any Genre below and you will be redirected to your Netflix account, showing movies in that Genre.</p>
				</header>
				<Genres />
			</div>
		);
	}
}

export default App;
