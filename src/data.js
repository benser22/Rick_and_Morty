import { pictures, gifs } from "./components/Card/Card.jsx";

const data = [
  {
    id: 1,
    name: "Rick Sanchez",
    cla: "rick",
    status: "Alive",
    species: "Human",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "",
    },
    image: pictures["1"],
    gif: gifs["1"],
    visibility: true,
  },
  {
    id: 2,
    cla: "morty",
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    gender: "Male",
    origin: {
      name: "unknown",
      url: "",
    },
    image: pictures["2"],
    gif: gifs["2"],
    visibility: true,
  },
  {
    id: 3,
    cla: "summer",
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
    gender: "Female",
    origin: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: pictures["3"],
    gif: gifs["3"],
    visibility: true,
  },
  {
    id: 4,
    cla: "beth",
    name: "Beth Smith",
    status: "Alive",
    species: "Human",
    gender: "Female",
    origin: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: pictures["4"],
    gif: gifs["4"],
    visibility: true,
  },
  {
    id: 5,
    cla: "jerry",
    name: "Jerry Smith",
    status: "Alive",
    species: "Human",
    gender: "Male",
    origin: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: pictures["5"],
    gif: gifs["5"],
    visibility: true,
  },
];

export default data;
