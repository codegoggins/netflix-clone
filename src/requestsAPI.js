const key = process.env.REACT_APP_API_KEY;
console.log(key);

const requests = {
    requestNowPlaying:`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
    requestLatest:`https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`,
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestTrending:`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
    requestPopularTV:`https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
    requestLatestTV:`https://api.themoviedb.org/3/tv/latest?api_key=${key}&language=en-US`,
    requestTopRatedTV:`https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`
}

export default requests