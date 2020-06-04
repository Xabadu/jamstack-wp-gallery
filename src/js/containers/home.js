import React from "react";
import { func, arrayOf, object } from "prop-types";

import Categories from "../components/categories";
import Container from "../components/container";
import Grid from "../components/grid";

const Home = ({ handleClick, tutorials }) => (
  <Container>
    <Categories onClick={handleClick} />
    <Grid tutorials={tutorials} />
  </Container>
);

Home.propTypes = {
  handleClick: func.isRequired,
  tutorials: arrayOf(object).isRequired,
};

export default Home;
