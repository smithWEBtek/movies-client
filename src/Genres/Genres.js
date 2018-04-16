import React, { Component } from 'react'
import * as actions from '../store/actions/index'
import Link from 'react'
import { connect } from 'react-redux';

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
			let url = 'http://netflix.com/browse/genre/' + `${genre.code}`
			return (
				<div key={index}>
					<a href={url}>{genre.title}</a>
				</div >
			)
		})

		return (
			<div>
				{renderedGenres}
			</div >
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
