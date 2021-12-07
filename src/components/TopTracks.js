import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "./Loader";

const SongGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-column-gap: 1em;
  grid-row-gap: 1em;

  @media ${(props) => props.theme.breakpoints[1]} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${(props) => props.theme.breakpoints[2]} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const SongCard = styled.div`
  padding: 0.5em;
  color: ${(props) => props.theme.colors.grey[0]};
  background: ${(props) => props.theme.colors.grey[6]};
  border-radius: 0.5em;
  display: flex;
  width: 100%;
  align-items: center;
  ${(props) => props.theme.shadows[2]}

  img {
    border-radius: 0.25em;
    flex-shrink: 0;
    align-self: flex-start;
  }

  div {
    margin-left: 0.25em;
    width: calc(100% - 4.5em);
  }

  div span {
    display: block;
    margin-left: 0.5rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    &:nth-child(1) {
      font-weight: 700;
      font-family: ${(props) => props.theme.typography.headings};
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      padding-bottom: 0.1em;
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
    <>
      {topTracks ? (
        <SongGrid>
          {topTracks.map((song, index) => {
            return (
              <SongCard key={index}>
                <img
                  src={song.artwork}
                  alt={`Album artwork for ${song.name}.`}
                  loading="lazy"
                />
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
    </>
  );
};

export default TopTracks;
