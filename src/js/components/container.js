import React from "react";
import { node } from "prop-types";

const Container = ({ children }) => <div className="container">{children}</div>;

Container.propTypes = {
  children: node.isRequired,
};

export default Container;
