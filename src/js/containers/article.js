import React from "react";
import { Helmet } from "react-helmet";
import { shape, string } from "prop-types";

import Container from "../components/container";

const Article = ({ detail }) => {
  function createMarkup(content) {
    return { __html: content };
  }

  if (detail && detail.content) {
    return (
      <>
        <Helmet>
          <title>{detail.title}</title>
        </Helmet>
        <Container>
          <div className="tutorial-container">
            <div dangerouslySetInnerHTML={createMarkup(detail.content)} />
          </div>
        </Container>
      </>
    );
  }

  return <p>Cargando...</p>;
};

Article.propTypes = {
  detail: shape({
    title: string,
    content: string,
  }).isRequired,
};

export default Article;
