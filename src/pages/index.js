import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

import Spacer from "../components/Spacer";
import Section from "../components/Section";

import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import TopTracks from "../components/TopTracks";

import Footer from "../components/Footer";

const index = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Connor Dowson | Portfolio</title>
      </Helmet>

      <Navbar isBlog={false} />
      <Hero />
      <About />
      <Projects projects={data.allContentfulProject.edges} />
      <TopTracks />
      <Footer />
    </Layout>
  );
};

export default index;

export const query = graphql`
  query HomePageQuery {
    allContentfulProject(sort: { fields: updatedAt, order: ASC }) {
      edges {
        node {
          title
          description {
            childMarkdownRemark {
              html
            }
          }
          image {
            fluid(quality: 90, maxWidth: 800) {
              ...GatsbyContentfulFluid
            }
          }
          technologies
          gitHubLink
          demoLink
        }
      }
    }
  }
`;
