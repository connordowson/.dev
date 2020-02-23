import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";

import Navbar from "../components/Navbar";

interface Props {
  title?: string;
}

const index = ({ title }: Props) => {
  return (
    <Layout>
      <Navbar isBlog={false} />
      <h1>Connor Dowson</h1>
    </Layout>
  );
};

export default index;
