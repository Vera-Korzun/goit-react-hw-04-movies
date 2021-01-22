import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import mainRoutes from "../../routes/MainRoutes";
import DefaultPage from "../pages/DefaultPage";

const Main = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {mainRoutes.map(({ path, name, exact, component: MyComponent }) => (
          // <Route path={path} exact={exact} key={path} component={component} />
          <Route
            path={path}
            exact={exact}
            key={path}
            render={() => <MyComponent name={name} />}
          />
        ))}
        <Route component={DefaultPage} />

        {/* <Route path={path} exact={true} component={HomePage} />
      <Route path={path} component={MoviesPage} /> */}
        {/* <HomePage />
      <MoviesPage />
      <MovieDetailsPage /> */}
      </Switch>
    </Suspense>
  );
};

export default Main;
