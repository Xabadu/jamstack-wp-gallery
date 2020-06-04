import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import axios from "axios";

import endpoints from "./config/endpoints";

const Header = lazy(() => import("../js/components/header"));
const Home = lazy(() => import("./containers/home"));
const Article = lazy(() => import("./containers/article"));

const App = () => {
  const [tutorials, setTutorials] = useState([]);
  const [filteredTutorials, setFilteredTutorials] = useState([]);

  useEffect(() => {
    axios
      .get(endpoints.tutorials)
      .then(({ data }) => {
        const dataFormated = data.reduce((acc, curr) => {
          const { id, title, slug, categories, content, _embedded } = curr;

          return acc.concat({
            id,
            slug,
            categories,
            title: title.rendered,
            content: content.rendered,
            image: _embedded["wp:featuredmedia"][0],
          });
        }, []);

        setTutorials(dataFormated);
        setFilteredTutorials(dataFormated);
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.error(error));
  }, []);

  const handleClick = (id) => {
    if (!id) {
      setFilteredTutorials(tutorials);
    } else {
      const filtered = tutorials.filter((tutorial) =>
        tutorial.categories.includes(id)
      );
      setFilteredTutorials(filtered);
    }
  };

  const findTutorial = (slug) => {
    return tutorials.find((tutorial) => tutorial.slug === slug);
  };

  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Home handleClick={handleClick} tutorials={filteredTutorials} />
            )}
          />
          <Route
            path="/:article"
            render={(routeProps) => (
              <Article detail={findTutorial(routeProps.match.params.article)} />
            )}
          />
        </Switch>
      </Suspense>
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector("#container"));
