import React, { Component } from 'react'
import * as actions from '../store/actions/index'
import { connect } from 'react-redux';
import GenreCard from './GenreCard';

class Genres extends Component {
	state = {
		genres: []
	}

	componentDidMount() {
		this.props.onFetchGenres()
		console.log(this.props);
	}

	render() {
		let renderedGenres = this.props.genres.map((genre, index) => {
			let url = 'http://netflix.com/browse/genre/' + genre.code
			return (
				<div key={index}>
					<GenreCard
						index={index}
						url={url}
						genre={genre}
					/>
				</div>
			)
		})

		return (
			<div className={"genres-index"}>
				{renderedGenres}
			</div>
		)

	}
}

const mapStateToProps = state => {
	return {
		genres: state.gen.genres
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchGenres: () => dispatch(actions.fetchGenres())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Genres)
