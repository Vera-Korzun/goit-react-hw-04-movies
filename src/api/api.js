export const fetchTrending = () => {
  const API_KEY = "f2e8f65ebe8d65366d5fe19e37f17d6e";
  const baseURL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

  return fetch(baseURL)
    .then((response) => {
      if (response.status === 200) {
        // console.log("response ==>>", response);

        return response.json();
      }
    })
    .then((data) => {
      // console.log("data.results) ==>>", data.results);

      return data.results;
    });
};

export const fetchMovies = (search, page) => {
  const API_KEY = "f2e8f65ebe8d65366d5fe19e37f17d6e";
  const baseURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=${page}&include_adult=false`;

  return fetch(baseURL)
    .then((response) => {
      if (response.status === 200) {
        // console.log("response ==>>", response);

        return response.json();
      }
    })
    .then((data) => {
      // console.log("data.results) ==>>", data.results);

      return data.results;
    });
};
