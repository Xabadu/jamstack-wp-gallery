import React from "react";

const Categories = (props) => {
  const { categories, onClick } = props;

  if (categories.length === 0) {
    return <div />;
  }

  return (
    <div className="categories-grid">
      <button onClick={() => onClick()}>Todos</button>
      {categories.map((category) => (
        <button onClick={() => onClick(category.id)} key={category.id} href="#">
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
