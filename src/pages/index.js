import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import Layout from "../templates/Layout";

import Spacer from "../components/Spacer";
import Section from "../components/Section";
import Row from "../components/Row";

import Hero from "../components/Hero";
import Map from "../components/Map";
import Projects from "../components/Projects";
import TopTracks from "../components/TopTracks";
import BlogPostLinks from "../components/BlogPostLinks";

const MapContainer = styled.div`
  width: 140px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  position: absolute;
  z-index: -1;

  svg {
    position: relative;
    z-index: -1;
  }
`;

const AccentHeading = styled.h2`
  color: ${(props) => props.theme.colors[props.theme.accent][4]};
`;

const index = ({
  data: {
    projects: { edges: projects },
    blogPosts: { edges: blogPosts },
    file: heroImage,
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Connor Dowson | Portfolio</title>
      </Helmet>

      <Hero heroImage={heroImage.childImageSharp.gatsbyImageData} />
      <Section>
        <Row>
          <Spacer
            vertical="1em"
            style={{
              position: "relative",
            }}
          >
            <AccentHeading>About me</AccentHeading>
            <p>
              I'm a front end web developer currently working and living in
              Bristol. I graduated from the University of Gloucestershire in
              2019 with a degree in Computing.
            </p>
            <p>
              I enjoy creating websites as a way to combine technical and
              creative skills; any projects shown here are either university
              work, or have been completed in my free time.
            </p>
            <p>
              In my free time I enjoy listening to music, watching football, and
              drinking cider.
            </p>
            <MapContainer>
              <Map />
            </MapContainer>
          </Spacer>
        </Row>
      </Section>

      <Section>
        <Row>
          <Spacer vertical="2em">
            <AccentHeading>Projects</AccentHeading>
            <Projects projects={projects} />
          </Spacer>
        </Row>
      </Section>
      <Section>
        <Row>
          <Spacer vertical="2em">
            <AccentHeading>Blog</AccentHeading>
            <BlogPostLinks blogPosts={blogPosts} />
          </Spacer>
        </Row>
      </Section>
      <Section>
        <Row>
          <Spacer vertical="2em">
            <AccentHeading>What I've been listening to</AccentHeading>
            <p>
              My top played songs from the Spotify API (so I can't hide any
              embarrassing ones).
            </p>
            <TopTracks />
          </Spacer>
        </Row>
      </Section>
    </Layout>
  );
};

export default index;

export const projectQuery = graphql`
  query {
    projects: allMdx(
      filter: { fields: { collection: { eq: "projects" } } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          body
          frontmatter {
            title
            technologies
            links {
              code
              demo
            }
            image {
              childImageSharp {
                gatsbyImageData(width: 330)
              }
            }
          }
        }
      }
    }

    blogPosts: allMdx(
      filter: { fields: { collection: { eq: "posts" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "Do MMMM, YYYY", locale: "en-GB")
          }
          excerpt
          timeToRead
        }
      }
    }

    file(name: { eq: "connordowson" }) {
      childImageSharp {
        gatsbyImageData(
          height: 448
          width: 352
          transformOptions: { cropFocus: CENTER }
        )
      }
    }
  }
`;
