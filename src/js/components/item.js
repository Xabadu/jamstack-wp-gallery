import React from "react";

const Item = (props) => {
  const { data } = props;
  const [ image ] = data._embedded['wp:featuredmedia'];
  
  return (
    <div className="item-container">
      <div className="item-container-image">
        <img src={image.source_url} alt="Tutorial" />
        <div className="item-container-links">
          <a href={data.link}>Ir al tutorial</a>
          <a href="#">Más >></a>
        </div>
      </div>
      <a href={data.link}>
        <p>{data.title.rendered}</p>
      </a>
      <small>Especial Tutoriales de Halloween</small>
    </div>
  );
};

export default Item;
