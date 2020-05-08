import React from "react";

import Item from "./item";

const Grid = (props) => {
  const { tutorials } = props;

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

export default Grid;
