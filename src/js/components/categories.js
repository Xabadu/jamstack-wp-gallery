import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import endpoints from "../config/endpoints";

const Categories = (props) => {
  const [categories, setCategories] = useState([]);
  const { onClick } = props;

  useEffect(() => {
    axios
      .get(endpoints.categories)
      .then(({ data }) => {
        setCategories(data);
      })
      // eslint-disable-next-line no-console
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
          key={category.id}
          onClick={() => onClick(category.id)}
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
