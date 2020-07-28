import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Panel from "./Panel";
import Section from "./Section";
import Spacer from "./Spacer";
import Loader from "./Loader";

const SongGrid = styled.div`
  display: grid;

  grid-column-gap: 1em;
  grid-row-gap: 1em;

  @media ${(props) => props.theme.breakpoints[1]} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const SongCard = styled.div`
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.grey[0]};
  background: ${(props) => props.theme.colors.grey[6]};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;

  img {
    border-radius: 0.25rem;
    flex-shrink: 0;
  }
  div span {
    display: block;
    margin-left: 0.5rem;

    &:nth-child(1) {
      text-overflow: ellipsis;
      font-weight: 700;
      font-family: ${(props) => props.theme.typography.headings};
    }

    &:nth-child(2) {
      color: ${(props) => props.theme.colors.grey[3]};
      font-size: 0.9em;
      margin-top: 0.25rem;
    }
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  svg {
    margin: 0 auto;
  }

  p {
    font-size: 1.5em;
    margin-top: 1em;
    font-weight: bold;
  }
`;

const getTopTracks = async () => {
  const response = await fetch("./.netlify/functions/getTopTracks");
  const { tracks } = await response.json();

  return tracks;
};

const TopTracks = () => {
  const [topTracks, setTopTracks] = useState();

  useEffect(() => {
    getTopTracks().then((data) => setTopTracks(data));
  }, []);
  return (
    <Section>
      <Spacer vertical="2rem">
        <h2>What I've been listening to</h2>
        <p>
          My top played songs from the Spotify API (so I can't hide any
          embarassing ones).
        </p>

        {topTracks ? (
          <SongGrid>
            {topTracks.map((song, index) => {
              return (
                <SongCard key={index}>
                  <img src={song.artwork} />
                  <div>
                    <span>{song.name}</span>
                    <span>{song.artist}</span>
                  </div>
                </SongCard>
              );
            })}
          </SongGrid>
        ) : (
          <LoaderContainer>
            <Loader height="70" width="70" radius="30" />
            <p>Loading...</p>
          </LoaderContainer>
        )}
      </Spacer>
    </Section>
  );
};

// TopTracks.propTypes = {};

export default TopTracks;
