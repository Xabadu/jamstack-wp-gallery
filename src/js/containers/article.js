import React from "react";
import { Helmet } from "react-helmet";
import Container from "../components/container";

const Article = (props) => {
  const { detail } = props;
  function createMarkup(content) {
    return { __html: content };
  }

  if (detail && detail.content) {
    const { rendered } = detail.content;
    return (
      <>
        <Helmet>
          <title>{detail.title.rendered}</title>
        </Helmet>
        <Container>
          <div className="tutorial-container">
            <div dangerouslySetInnerHTML={createMarkup(rendered)} />
          </div>
        </Container>
      </>
    );
  }

  return <p>Cargando...</p>;
};

export default Article;
