import * as actionTypes from '../actions/actionTypes';

const initialState = {
	genres: [],
	loading: false,
	error: false,
	message: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {

		//-----CREATE GENRE-----------------------------
		case actionTypes.CREATE_GENRE_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.CREATE_GENRE_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.CREATE_GENRE_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.CREATE_GENRE:
			const newGenre = action.genreData
			return Object.assign({}, state, {
				genres: state.genres.concat(newGenre)
			})


		//-----FETCH GENRES-----------------------------
		case actionTypes.FETCH_GENRES_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.FETCH_GENRES_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.FETCH_GENRES_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.FETCH_GENRES:
			const genres = action.genresList
			return Object.assign({}, state, {
				genres: genres
			})


		//-----UPDATE GENRE-----------------------------
		case actionTypes.UPDATE_GENRE_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.UPDATE_GENRE_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.UPDATE_GENRE_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.UPDATE_GENRE:
			//const genreData = action.updatedGenreData
			//debugger
			//const genreIndex = state.genres.findIndex(genre => genre.id === genreData.id);
			// const stateTemp = {
			//   ...state,
			//   genres: [
			//     ...state.genres.slice(0, genreIndex),
			//     ...state.genres.slice(genreIndex + 1, state.genres.length)
			//   ]
			// };
			const updatedGenresArray = state.genres.map(genre => genre.id === action.updatedGenreData.id ? action.updatedGenreData : genre)
			return Object.assign({}, state, { genres: updatedGenresArray })


		//-----DELETE GENRE-----------------------------
		case actionTypes.DELETE_GENRE_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.DELETE_GENRE_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.DELETE_GENRE_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.DELETE_GENRE:
			const updatedGenres = state.genres.filter(genre => genre.id !== action.id);
			return Object.assign({}, state, {
				genres: updatedGenres
			})

		//----- DEFAULT --------------------------------
		default:
			return state;
	}
}

export default reducer;
