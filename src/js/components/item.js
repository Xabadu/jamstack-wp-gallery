import React, { useEffect, useState } from "react";

const Item = (props) => {
  const [image, setImage] = useState("");
  const { data } = props;

  useEffect(() => {
    fetch(data._links["wp:featuredmedia"][0].href)
      .then((response) => response.json())
      .then((response) => {
        setImage(response.source_url);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="item-container">
      <div className="item-container-image">
        <img src={image} alt="Tutorial" />
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
