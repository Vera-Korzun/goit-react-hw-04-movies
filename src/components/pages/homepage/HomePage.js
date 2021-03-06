import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { fetchTrending } from "../../../api/api";
import HomeStyled from "./HomeStyled";

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrending().then((response) => {
      //console.log("response ==>>", response);
      setTrendMovies([...response]);
    });
  }, []);

  return (
    //console.log("trendMovies ==>>", trendMovies);
    <HomeStyled>
      <div className="homepage">
        <h2 className="homepage_title">Trending today</h2>
        <ul className="trending__list">
          {trendMovies.map((movie, index) => (
            <li className="trending__list-item" key={`${movie.id}${index}`}>
              <NavLink
                className="trending__list-link"
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: {
                    from: location.pathname,
                    movieId: movie.id,
                  },
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.name ? movie.name : movie.title}
                  width="250px"
                />
                <h3 className="trending__list-title">
                  {movie.name ? movie.name : movie.title}
                </h3>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </HomeStyled>
  );
};

export default HomePage;

// class HomePage extends Component {
//   state = {
//     trendMovies: [],
//   };

//   componentDidMount = () => {
//     fetchTrending().then((response) => {
//       //console.log("response ==>>", response);
//       this.setState((prev) => ({
//         ...prev,
//         trendMovies: [...response],
//       }));
//     });
//   };

//   render() {
//     const { trendMovies } = this.state;
//     //console.log("trendMovies ==>>", trendMovies);
//     return (
//       <HomeStyled>
//         <div className="homepage">
//           <h2>Trending today</h2>
//           <ul>
//             {trendMovies.map((movie, index) => (
//               <li key={`${movie.id}${index}`}>
//                 <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </HomeStyled>
//     );
//   }
// }

// export default HomePage;
