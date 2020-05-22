import React from "react";
import { Helmet } from "react-helmet";
import Container from "../components/container";

const Article = (props) => {
  function createMarkup(content) {
    return { __html: content };
  }

  if (props.detail && props.detail.content) {
    const { rendered } = props.detail.content;
    return (
      <>
        <Helmet>
          <title>{props.detail.title.rendered}</title>
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
