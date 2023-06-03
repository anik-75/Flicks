export const api_key = process.env.REACT_APP_TMDB_API_KEY;
export const baseurl = "https://api.themoviedb.org/3";
export const img_url = "https://image.tmdb.org/t/p/original";
export const search_url = `${baseurl}/search/movie?api_key=${api_key}&query=`;

const requests = [
  { Popular: `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}` },
  {
    "Now Playing": `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`,
  },
  {
    "Top Rated": `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`,
  },
  {
    Upcoming: `https://api.themoviedb.org/3/movie/upcoming
?api_key=${api_key}  `,
  },
];
export default requests;
