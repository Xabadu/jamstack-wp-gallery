import React from "react";
import { Helmet } from "react-helmet";
import { shape, string } from "prop-types";
import parse from "html-react-parser";

import Container from "../components/container";

const Article = ({ detail }) => {
  if (!detail) {
    return <p>Cargando...</p>;
  }

  const isEmpty = (str) => str.replace(/^\s+|\s+$/g, "").length === 0;

  const config = {
    replace: (prevDomNode) => {
      const currDomNode = { ...prevDomNode };

      if (currDomNode.data && isEmpty(currDomNode.data)) {
        return <></>;
      }

      if (currDomNode.attribs) {
        delete currDomNode.attribs.style;
        delete currDomNode.attribs.class;
        delete currDomNode.attribs.width;
        delete currDomNode.attribs.height;

        if (currDomNode.attribs.alt === "sello_garantia") {
          currDomNode.attribs.class = "sello-garantia";
        }
      }

      return currDomNode;
    },
  };

  return (
    <>
      <Helmet>
        <title>{detail.title}</title>
      </Helmet>
      <Container>
        <div className="tutorial-container">
          <h1>{detail.title}</h1>
          {parse(detail.content, config)}
        </div>
      </Container>
    </>
  );
};

Article.propTypes = {
  detail: shape({
    title: string,
    content: string,
  }),
};

Article.defaultProps = {
  detail: null,
};

export default Article;
