const API_URL = "https://swt-movies.herokuapp.com/api" || "http://127.0.0.1:3001/api"

const GenreService = {
	createGenre(genre) {
		const request = {
			method: 'POST',
			body: JSON.stringify({ genre: genre }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/genres`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[GenreService][createGenre] ERROR: ', error)
			})
	},
	fetchGenres() {
		return fetch(`${API_URL}/genres`)
			.then(response => response.json())
			.catch(error => {
				console.log('[GenreService][fetchGenres] ERROR: ', error)
			})
	},
	updateGenre(data) {
		const request = {
			method: 'PATCH',
			body: JSON.stringify({ genre: data }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/genres/${data.id}`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[GenreService][updateGenre] ERROR: ', error)
			})
	},
	deleteGenre(id) {
		const request = {
			method: 'DELETE',
			body: JSON.stringify({ id: id }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/genres/${id}`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[GenreService][deleteGenre] ERROR: ', error)
			})
	}
}

export default GenreService;
