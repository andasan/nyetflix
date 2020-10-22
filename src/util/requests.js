const TMDB_APIKey = process.env.REACT_APP_TMDB_API;

const requests = {
    fetchTrending: `/trending/all/week?api_key=${TMDB_APIKey}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${TMDB_APIKey}&with_network=123`,
	fetchTopRated: `/movie/top_rated?api_key=${TMDB_APIKey}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${TMDB_APIKey}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${TMDB_APIKey}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${TMDB_APIKey}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${TMDB_APIKey}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${TMDB_APIKey}&with_genres=99`
};

export default requests;