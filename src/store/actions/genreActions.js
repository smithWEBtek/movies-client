import * as actionTypes from './actionTypes'
import GenreService from '../services/genreService'

//-----CREATE GENRE ACTIONS-----------------------------
export const createGenreStart = () => {
	return { type: actionTypes.CREATE_GENRE_START }
}
export const createGenreSuccess = () => {
	return { type: actionTypes.CREATE_GENRE_SUCCESS }
}
export const createGenreFail = (error) => {
	return { type: actionTypes.CREATE_GENRE_FAIL, error: error }
}
export const createGenre = (data, history) => {
	return dispatch => {
		dispatch(createGenreStart())
		GenreService.createGenre(data)
			.then(response => {
				dispatch({ type: actionTypes.CREATE_GENRE, genreData: response })
				history.push(`/genres/${response.id}`)
				dispatch(createGenreSuccess())
			})
			.catch(error => {
				dispatch(createGenreFail(error))
			})
	}
}


//-----FETCH GENRES ACTIONS-----------------------------
export const fetchGenresStart = () => {
	return { type: actionTypes.FETCH_GENRES_START }
}
export const fetchGenresSuccess = (genres) => {
	return { type: actionTypes.FETCH_GENRES_SUCCESS, genresList: genres }
}
export const fetchGenresFail = (error) => {
	return { type: actionTypes.FETCH_GENRES_FAIL, error: error }
}
export const fetchGenres = () => {
	return dispatch => {
		dispatch(fetchGenresStart())
		GenreService.fetchGenres()
			.then(response => {

				dispatch({ type: actionTypes.FETCH_GENRES, genresList: response })
				dispatch(fetchGenresSuccess())
			})
			.catch(error => {
				dispatch(fetchGenresFail(error))
			})
	}
}


//-----UPDATE GENRE ACTIONS-----------------------------
export const updateGenreStart = () => {
	return { type: actionTypes.UPDATE_GENRE_START }
}
export const updateGenreSuccess = () => {
	return { type: actionTypes.UPDATE_GENRE_SUCCESS }
}
export const updateGenreFail = (error) => {
	return { type: actionTypes.UPDATE_GENRE_FAIL, error: error }
}
export const updateGenre = (data, history) => {
	return dispatch => {
		dispatch(updateGenreStart())
		GenreService.updateGenre(data)
			.then(response => {
				dispatch({ type: actionTypes.UPDATE_GENRE, updatedGenreData: response })
				history.goBack()
				dispatch(updateGenreSuccess())
			})
			.catch(error => {
				dispatch(updateGenreFail(error))
			})
	}
}

//-----DELETE GENRE ACTIONS-----------------------------
export const deleteGenreStart = () => {
	return { type: actionTypes.DELETE_GENRE_START }
}
export const deleteGenreSuccess = () => {
	return { type: actionTypes.DELETE_GENRE_SUCCESS }
}
export const deleteGenreFail = (error) => {
	return { type: actionTypes.DELETE_GENRE_FAIL, error: error }
}
export const deleteGenre = (id, history) => {
	return dispatch => {
		dispatch(deleteGenreStart())
		GenreService.deleteGenre(id)
			.then(response => {
				dispatch({ type: actionTypes.DELETE_GENRE, id: id })
				dispatch(deleteGenreSuccess())
				history.push('/genres')
			})
			.catch(error => {
				dispatch(deleteGenreFail(error))
			})
	}
}
