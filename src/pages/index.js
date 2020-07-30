import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import Layout from "../templates/Layout";
import Navbar from "../components/Navbar";

import Spacer from "../components/Spacer";
import Section from "../components/Section";

import Hero from "../components/Hero";
import Map from "../components/Map";
import Projects from "../components/Projects";
import TopTracks from "../components/TopTracks";

import Footer from "../components/Footer";

const AboutMe = styled(Section)`
  margin-top: 3em;
`;

const MapContainer = styled.div`
  width: 140px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  z-index: -1;
`;

const AccentHeading = styled.h2`
  color: ${(props) => props.theme.colors[props.theme.accent][4]};
`;

const index = ({ data }) => {
  const projects = data.allContentfulProject.edges;
  return (
    <Layout>
      <Helmet>
        <title>Connor Dowson | Portfolio</title>
      </Helmet>

      <Navbar isBlog={false} />
      <Hero />
      <AboutMe id="about-me">
        <Spacer
          vertical="1em"
          style={{
            position: "relative",
          }}
        >
          <AccentHeading>About me</AccentHeading>
          <p>
            I'm a front end web developer currently working and living in
            Bristol. I graduated from the University of Gloucestershire in 2019
            with a degree in Computing.
          </p>
          <p>
            I enjoy creating websites as a way to combine techincal and creative
            skills; any projects shown here are either university work, or have
            been completed in my free time.
          </p>
          <p>
            In my free time I enjoy listening to music, watching football, and
            drinking cider.
          </p>
          <MapContainer>
            <Map />
          </MapContainer>
        </Spacer>
      </AboutMe>
      <Section id="projects">
        <Spacer vertical="2em">
          <AccentHeading>Projects</AccentHeading>
          <Projects projects={projects} />
        </Spacer>
      </Section>
      <Section>
        <Spacer vertical="2em">
          <AccentHeading>What I've been listening to</AccentHeading>
          <p>
            My top played songs from the Spotify API (so I can't hide any
            embarassing ones).
          </p>
          <TopTracks />
        </Spacer>
      </Section>
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
            fixed(quality: 90, width: 330) {
              ...GatsbyContentfulFixed
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
