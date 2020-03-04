import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

import Spacer from "../components/Spacer";
import Section from "../components/Section";

import Hero from "../components/Hero";
import About from "../components/About";
import Project from "../components/Project";

interface Props {
  title?: string;
  data: {
    allContentfulProject: any;
  };
}

const index = ({ data }: Props) => {
  return (
    <Layout>
      <Navbar isBlog={false} />
      <Hero />
      <About />
      <Section>
        <Spacer vertical="2rem">
          {data.allContentfulProject.edges.map((project, index) => {
            return <Project project={project.node} />;
          })}
        </Spacer>
      </Section>
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
