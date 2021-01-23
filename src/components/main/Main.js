import React, { Suspense, useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoaderSpinner from "../loader/LoaderSpinner";
import mainRoutes from "../../routes/MainRoutes";
import DefaultPage from "../pages/DefaultPage";
import { fetchMovies, fetchTrending } from "../../api/api";

const initialState = {
  movies: [],
  moviesSearch: [],
  query: "",
  page: 1,
  loading: false,
};

const Main = () => {
  const [state, setState] = useState({ ...initialState });

  useEffect(() => {
    //console.log("componentDidMount");
    fetchTrending().then((response) => {
      // console.log("response ==>>", response);
      setState((prev) => ({
        ...prev,
        movies: [...response],
      }));
      // setState({ movies: [...response] });
    });
  }, []);

  const getMovies = async (search, page = 1) => {
    // console.log("getPhoto page=>>", page);
    // console.log("getPhoto search=>>", search);
    setState({
      loading: true,
    });
    //console.log("state loading ", state.loading);
    const result = await fetchMovies(search, page);
    console.log("result ==>>>", result);
    setState((prev) => ({
      ...prev,
      moviesSearch: [...result],
      page: 2,
      query: search,
      loading: false,
    }));
  };

  return (
    <Suspense fallback={state.loading && <LoaderSpinner />}>
      <Switch>
        <>
          {/* {state.loading && <LoaderSpinner />} */}
          {mainRoutes.map(({ path, name, exact, component: MyComponent }) => (
            // <Route path={path} exact={exact} key={path} component={component} />
            <Route
              path={path}
              exact={exact}
              key={path}
              render={() => (
                <MyComponent
                  name={name}
                  dataMovies={state.movies}
                  dataMoviesSearch={state.moviesSearch}
                  onClick={getMovies}
                />
              )}
            />
          ))}
          <Route component={DefaultPage} />

          {/* <Route path={path} exact={true} component={HomePage} />
      <Route path={path} component={MoviesPage} /> */}
          {/* <HomePage />
      <MoviesPage />
      <MovieDetailsPage /> */}
        </>
      </Switch>
    </Suspense>
  );
};

export default Main;
