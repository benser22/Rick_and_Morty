import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SlideContainer = styled.div`
  padding: 10px;
  height: 400px;
  overflow-y: scroll;
  cursor: default;
`;

const MyDiv = styled.div`
background-image: linear-gradient(45deg, #2e788d, #3799ab, #4db8cb, #2e788d);
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
border: 2px groove #23626d;
border-radius: 10px;
min-width: 50vh;
margin-top: 5vh;
`;

const EpisodeBox = styled.div`
  border: 2px groove #23626d;
  border-radius: 12px;
  margin-bottom: 10px;
  padding: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 1);
`;


const EpisodeTitle = styled.h4`
  margin: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  font-size: 16px;
  margin-bottom: 5px;
`;

const EpisodeInfo = styled.p`
  margin: 0;
  color: dark_gray;
  font-size: 16px;
`;

const Myh3 = styled.h3`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #c0df3e;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
  margin-bottom: 4px;
  padding: 6px;
`;


export default function SlideEpisode({ episodes }) {
  const [episodeDetails, setEpisodeDetails] = useState([]);

  useEffect(() => {
    const fetchEpisodeDetails = async () => {
      const detailedEpisodes = [];

      for (const episodeURL of episodes) {
        const response = await fetch(episodeURL);
        const data = await response.json();
        detailedEpisodes.push(data);
      }

      setEpisodeDetails(detailedEpisodes);
    };

    fetchEpisodeDetails();
  }, [episodes]);

  return (
    <MyDiv>
      <Myh3>Appearances</Myh3>
      <SlideContainer>
        {episodeDetails.map((episode) => (
          <EpisodeBox key={episode.id}>
            <EpisodeTitle>{episode.name}</EpisodeTitle>
            <EpisodeInfo>
              <strong>Fecha de emisión:</strong> {episode.air_date}
              <br />
              <strong>Episodio:</strong> {episode.episode}
            </EpisodeInfo>
          </EpisodeBox>
        ))}
      </SlideContainer>
    </MyDiv>
  );
}
