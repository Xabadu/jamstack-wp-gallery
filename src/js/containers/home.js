import React, { useEffect, useState } from "react";

import Categories from "../components/categories";
import Grid from "../components/grid";

const GET_CATEGORIES_ENDPOINT =
  "https://comolohago.cl/wp-json/wp/v2/categories?include=343,24,182,1695,440";

const GET_TUTORIALS_ENDPOINT =
  "https://comolohago.cl/wp-json/wp/v2/posts?include=9149,193,9217,4583,9170,9260,7553,9185,4203,5234,5953,9218,9286&per_page=20";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [tutorials, setTutorials] = useState([]);
  const [filteredTutorials, setFilteredTutorials] = useState([]);

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

  return (
    <>
      <Categories categories={categories} onClick={handleClick} />
      <Grid tutorials={filteredTutorials} />
    </>
  );
};

export default Home;
