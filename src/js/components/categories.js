import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const BASE_URL = "https://comolohago.cl/wp-json/wp/v2";
const GET_CATEGORIES_ENDPOINT = `${BASE_URL}/categories?include=343,24,182,1695,440`;

const Categories = (props) => {
  const [categories, setCategories] = useState([]);
  const { onClick } = props;

  useEffect(() => {
    axios
      .get(GET_CATEGORIES_ENDPOINT)
      .then(({ data }) => {
        setCategories(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="categories-grid" data-testid="categories-grid-element">
      <button type="button" onClick={() => onClick()}>
        Todos
      </button>
      {categories.map((category) => (
        <button
          type="button"
          onClick={() => onClick(category.id)}
          key={category.id}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

Categories.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Categories;
