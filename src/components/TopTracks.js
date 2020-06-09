import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "./Section";
import Spacer from "./Spacer";

const SongGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-column-gap: 1em;
  grid-row-gap: 1em;
`;

const SongCard = styled.div`
  padding: 0.5rem;
  color: ${props => props.theme.colors.grey[0]};
  background: ${props => props.theme.colors.grey[7]};
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
    &:nth-child(2) {
      color: ${props => props.theme.colors.grey[4]};
      font-size: 0.9em;
      margin-top: 0.25rem;
    }
  }
`;

const getTopTracks = async () => {
  return await fetch("./.netlify/functions/getTopTracks")
    .then(res => res.json())
    .then(data => {
      return data;
    });
};

const TopTracks = props => {
  const [topTracks, setTopTracks] = useState();

  useEffect(() => {
    getTopTracks().then(data => {
      setTopTracks(data);
    });
  }, []);
  return (
    <Section>
      <Spacer vertical="2rem">
        <h2>What I've been listening to</h2>
        <SongGrid>
          {topTracks
            ? topTracks.map(song => {
                return (
                  <SongCard>
                    <img src={song.album.images[2].url} />
                    <div>
                      <span>{song.name}</span>
                      <span>{song.artists[0].name}</span>
                    </div>
                  </SongCard>
                );
              })
            : "loading..."}
        </SongGrid>
      </Spacer>
    </Section>
  );
};

TopTracks.propTypes = {};

export default TopTracks;
