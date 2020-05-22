import React from "react";

import Categories from "../components/categories";
import Container from "../components/container";
import Grid from "../components/grid";

const Home = (props) => {
  const { categories = [], handleClick, tutorials = [] } = props;

  return (
    <Container>
      <Categories categories={categories} onClick={handleClick} />
      <Grid tutorials={tutorials} />
    </Container>
  );
};

export default Home;
