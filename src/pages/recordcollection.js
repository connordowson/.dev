import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import Layout from "../templates/Layout";

import Spacer from "../components/Spacer";
import Section from "../components/Section";
import Row from "../components/Row";

const CollectionGrid = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(2, 1fr);

  @media ${(props) => props.theme.breakpoints[1]} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${(props) => props.theme.breakpoints[2]} {
    grid-template-columns: repeat(5, 1fr);
  }

  > div {
    border-radius: 0.25em;
    background: ${(props) => props.theme.colors.grey[7]};
    padding: 0.5em;
    position: relative;

    p {
      &:first-of-type {
        font-weight: 500;
      }
      &:nth-of-type(2) {
        font-weight: 300;
        color: ${(props) => props.theme.colors.grey[2]};
      }
    }

    img {
      width: 100%;
    }
  }
`;

const RecordCollection = () => {
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    const apiUrl = `https://api.discogs.com/users/dows/collection/folders/0/releases?token=${process.env.GATSBY_DISCOGS_API_TOKEN}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        let unsortedReleases = res.releases;
        let sortedReleases = unsortedReleases.sort(
          (a, b) => Date.parse(b.date_added) - Date.parse(a.date_added)
        );
        setCollection(sortedReleases);
      });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Connor Dowson | Record collection</title>
      </Helmet>
      <Section>
        <Row>
          <Spacer vertical="1em">
            <h1>My record collection</h1>
            <p>My record collection, collected from the Discogs API.</p>
            <CollectionGrid>
              {!collection ? (
                <p>Loading....</p>
              ) : (
                collection.map((release, index) => (
                  <Spacer vertical="0.5em" key={index}>
                    <img
                      src={release.basic_information.cover_image}
                      alt={release.basic_information.title}
                    />
                    <div>
                      <p>{release.basic_information.title}</p>
                      <p>{release.basic_information.artists[0].name}</p>
                    </div>
                  </Spacer>
                ))
              )}
            </CollectionGrid>
          </Spacer>
        </Row>
      </Section>
    </Layout>
  );
};

export default RecordCollection;
