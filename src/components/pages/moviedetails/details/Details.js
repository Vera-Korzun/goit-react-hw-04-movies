import React, { Suspense } from "react";
import { Switch, Route } from "react-route-dom";
import moviesDetailsRoutes from "../../../../routes/MoviesDetailsRouters";

const Details = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {moviesDetailsRoutes.map(
          ({ path, name, exact, component: MyComponent }) => (
            // <Route path={path} exact={exact} key={path} component={component} />
            <Route
              path={path}
              exact={exact}
              key={path}
              render={() => <MyComponent name={name} />}
            />
          )
        )}
      </Switch>
    </Suspense>
  );
};

export default Details;
