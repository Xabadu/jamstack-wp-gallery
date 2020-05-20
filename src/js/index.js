import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const Header = lazy(() => import("../js/components/header"));
const Home = lazy(() => import("./containers/home"));
const Article = lazy(() => import("./containers/article"));

const App = () => (
  <Router>
    <Suspense fallback={<p>Loading...</p>}>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:article" component={Article} />
      </Switch>
    </Suspense>
  </Router>
);

ReactDOM.render(<App />, document.querySelector("#container"));
