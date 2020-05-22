import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const BASE_URL = "https://comolohago.cl/wp-json/wp/v2";
const GET_CATEGORIES_ENDPOINT = `${BASE_URL}/categories?include=343,24,182,1695,440`;
const GET_TUTORIALS_ENDPOINT = `${BASE_URL}/posts?include=9149,193,9217,4583,9170,9260,7553,9185,4203,5234,5953,9218,9286&per_page=20&_embed`;

const Header = lazy(() => import("../js/components/header"));
const Home = lazy(() => import("./containers/home"));
const Article = lazy(() => import("./containers/article"));

const App = () => {
  const [tutorials, setTutorials] = useState([]);
  const [filteredTutorials, setFilteredTutorials] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(GET_TUTORIALS_ENDPOINT)
      .then((response) => response.json())
      .then((response) => {
        setTutorials(response);
        setFilteredTutorials(response);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch(GET_CATEGORIES_ENDPOINT)
      .then((response) => response.json())
      .then((response) => {
        setCategories(response);
      })
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
              <Home
                handleClick={handleClick}
                tutorials={filteredTutorials}
                categories={categories}
              />
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
