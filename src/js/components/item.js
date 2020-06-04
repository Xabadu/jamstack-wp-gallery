import React from "react";
import { Link } from "react-router-dom";
import { shape, string } from "prop-types";

const Item = ({ data }) => (
  <div className="item-container">
    <div className="item-container-image">
      <img src={data.image.source_url} alt="Tutorial" />
      <div className="item-container-links">
        <Link to={data.slug}>Ir al tutorial</Link>
        <Link to={data.slug}>
          Más
          {">>"}
        </Link>
      </div>
    </div>
    <Link to={data.slug}>
      <strong>{data.title}</strong>
    </Link>
    <p>
      <small>Especial Tutoriales de Halloween</small>
    </p>
  </div>
);

Item.propTypes = {
  data: shape({
    title: string,
    slug: string,
    image: shape({}),
  }).isRequired,
};

export default Item;
