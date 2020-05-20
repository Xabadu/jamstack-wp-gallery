import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Header from '../js/components/header';

const Home = lazy(() => import("./containers/home"));
const Article = lazy(() => import("./containers/article"));

const App = () => (
  <>
    <Header />
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:article" component={Article} />
        </Switch>
      </Suspense>
    </Router>
  </>
);

ReactDOM.render(<App />, document.querySelector("#container"));
