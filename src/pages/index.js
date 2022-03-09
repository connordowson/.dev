import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../templates/Layout";

import Section from "../components/Section";
import Row from "../components/Row";

import Hero from "../components/Hero";
import Map from "../components/Map";
import { mapContainer, mapSVG } from "../components/Map/Map.css";
import Projects from "../components/Projects";
import TopTracks from "../components/TopTracks";
import BlogPostLinks from "../components/BlogPostLinks";
import { accentHeading } from "../components/accentHeading/accentHeading.css";
import { topSongsInfoText } from "../components/TopTracks/TopTracks.css";

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
          <div
            style={{
              position: "relative",
            }}
          >
            <h2 className={accentHeading}>About me</h2>
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
            <div className={mapContainer}>
              <Map className={mapSVG} />
            </div>
          </div>
        </Row>
      </Section>

      <Section>
        <Row>
          <div>
            <h2 className={accentHeading}>Projects</h2>
            <Projects projects={projects} />
          </div>
        </Row>
      </Section>
      <Section>
        <Row>
          <div>
            <h2 className={accentHeading}>Blog</h2>
            <BlogPostLinks blogPosts={blogPosts} />
          </div>
        </Row>
      </Section>
      <Section>
        <Row>
          <div>
            <h2 className={accentHeading}>What I've been listening to</h2>
            <p className={topSongsInfoText}>
              My top played songs from the Spotify API (so I can't hide any
              embarrassing ones).
            </p>
            <TopTracks />
          </div>
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
