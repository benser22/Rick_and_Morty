import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Utilizo Styled-components como otra opción de lo que aprendimos para dar estilos
const MyDiv = styled.div`
  background-image: linear-gradient(45deg, #2e788d, #3799ab, #4db8cb, #2e788d);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  border: 2px groove #23626d;
  min-width: 50vh;
  margin-top: 12vh;
  height: 30vh;
  border-radius: 0 16px 0 16px;
`;

const SlideContainer = styled.div`
  padding: 10px;
  height: 20vh;
  overflow-y: scroll;
  cursor: default;
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

export default function Episodes({ episodes }) {
  // Mantengo un estado para almacenar los detalles de los episodios
  const [episodeDetails, setEpisodeDetails] = useState([]);

  useEffect(() => {
    // Defino una función para obtener los detalles de los episodios
    const fetchEpisodeDetails = () => {
      // Creo un array para almacenar los detalles de los episodios
      const detailedEpisodes = [];

      // El "episodes" que recibo por parametro es un array con direcciones. Si accedo a cada una muestra en un Json información de ese episodio
      for (const episodeURL of episodes) {
        fetch(episodeURL)
          .then((response) => response.json())
          .then((data) => {
            // Agrego los detalles del episodio al array
            detailedEpisodes.push(data);
            // Actualizo el estado con los detalles de los episodios
            setEpisodeDetails([...detailedEpisodes]);
          })
          .catch((error) => {
            console.log("Error fetching episode details:", error);
          });
      }
    };

    // Llamo a la función para obtener los detalles de los episodios
    fetchEpisodeDetails();
  }, [episodes]);

  return (
    <MyDiv>
      <Myh3>Appearances</Myh3>
      <SlideContainer>
        {/* Renderizo cada episodio con sus detalles */}
        {episodeDetails.map((episode) => (
          <EpisodeBox key={episode.id}>
            <EpisodeTitle>{episode.name}</EpisodeTitle>
            <EpisodeInfo>
              <strong>Air Date:</strong> {episode.air_date}
              <br />
              <strong>Episode:</strong> {episode.episode}
            </EpisodeInfo>
          </EpisodeBox>
        ))}
      </SlideContainer>
    </MyDiv>
  );
}
