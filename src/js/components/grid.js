import React from "react";
import { arrayOf, object } from "prop-types";

import Item from "./item";

const Grid = ({ tutorials }) => {
  return (
    <div className="grid">
      {tutorials.map((tutorial) => (
        <div className="item" key={tutorial.id}>
          <Item data={tutorial} />
        </div>
      ))}
    </div>
  );
};

Grid.propTypes = {
  tutorials: arrayOf(object).isRequired,
};

export default Grid;
